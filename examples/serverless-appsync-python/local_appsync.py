import json
from collections.abc import Callable, Mapping
from http.server import BaseHTTPRequestHandler, HTTPServer
from importlib import import_module
from pathlib import Path
from typing import Any, Protocol

from app.resolvers.handler import graphqlResolver


class ResolverField(Protocol):
    resolve: Callable[..., Any] | None


class ObjectType(Protocol):
    fields: Mapping[str, ResolverField]


class GraphQLSchema(Protocol):
    def get_type(self, name: str) -> ObjectType | None:
        raise NotImplementedError


graphql = import_module("graphql")
SCHEMA: GraphQLSchema = graphql.build_schema(Path("schema.graphql").read_text())


def resolver(field_name):
    def invoke(_source, _info, **arguments):
        return graphqlResolver(
            {"arguments": arguments, "info": {"fieldName": field_name}}, None
        )

    return invoke


for field_name in ("getResource", "getResources", "createResource"):
    type_name = "Mutation" if field_name == "createResource" else "Query"
    parent = SCHEMA.get_type(type_name)
    if (
        parent is None
        or not hasattr(parent, "fields")
        or field_name not in parent.fields
    ):
        raise RuntimeError(f"Schema is missing {type_name}.{field_name}")
    parent.fields[field_name].resolve = resolver(field_name)


class GraphQLHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/graphql":
            self.send_error(404)
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
            payload = json.loads(self.rfile.read(length))
            result = graphql.graphql_sync(
                SCHEMA,
                payload["query"],
                variable_values=payload.get("variables"),
                operation_name=payload.get("operationName"),
            )
            body = json.dumps(result.formatted).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        except (KeyError, TypeError, ValueError) as error:
            self.send_error(400, str(error))


if __name__ == "__main__":
    print("Local GraphQL handler server at http://127.0.0.1:20002/graphql")
    print(
        "This runs the schema and Lambda handler; it does not emulate AppSync, VTL, "
        "or auth."
    )
    HTTPServer(("127.0.0.1", 20002), GraphQLHandler).serve_forever()
