import unittest

from app.resolvers.handler import graphqlResolver


class GraphQLResolverTests(unittest.TestCase):
    def test_get_resource_resolves_an_appsync_field(self):
        result = graphqlResolver(
            {"arguments": {"id": "7"}, "info": {"fieldName": "getResource"}},
            None,
        )
        self.assertEqual(result, {"id": "7", "name": "Resource 7"})

    def test_create_resource_reads_the_schema_data_input(self):
        result = graphqlResolver(
            {
                "arguments": {"data": {"name": "Created"}},
                "info": {"fieldName": "createResource"},
            },
            None,
        )
        self.assertEqual(result, {"id": "1", "name": "Created"})

    def test_unknown_appsync_field_is_rejected(self):
        with self.assertRaisesRegex(ValueError, "Unknown field name: missing"):
            graphqlResolver({"arguments": {}, "info": {"fieldName": "missing"}}, None)


if __name__ == "__main__":
    unittest.main()
