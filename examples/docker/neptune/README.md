# AWS Neptune

Imitate AWS Neptune using Docker for local dev

## Requirements

- [docker](https://www.docker.com/)

## Quickstart

```sh
git clone https://github.com/nanlabs/infra-reference.git
cd infra-reference/examples/docker/neptune
docker compose up
```

## Testing

```sh
curl "http://localhost:8182/gremlin?gremlin=g.V()"
```
