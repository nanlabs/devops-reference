# AWS Neptune

Imitate AWS Neptune using Docker for local dev

## Requirements

- [docker](https://www.docker.com/)

## Quickstart

```sh
git clone https://github.com/nanlabs/devops-reference.git
cd devops-reference/examples/compose-neptune
docker compose up
```

## Testing

```sh
curl "http://localhost:8182/gremlin?gremlin=g.V()"
```
