<div align="center">
<p>
    <img
        style="width: 200px"
        width="200"
        src="https://avatars.githubusercontent.com/u/4426989?s=200&v=4"
    >
</p>
<h1>Infrastructure Reference</h1>

[Changelog](#) |
[Contributing](./CONTRIBUTING.md)

</div>
<div align="center">

[![Shell Check][shellcheckbadge]][shellcheckurl]
[![Tensorflow Check][tf-checkbadge]][tf-checkurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This repository contains different infrastructure components that are used in different projects
here at [NaN Labs](https://www.nanlabs.com/).

- [Applications](#applications)
- [Examples](#examples)
  - [Shell Scripting and Utilities](#shell-scripting-and-utilities)
  - [DevContainers and Codespaces](#devcontainers-and-codespaces)
  - [Cloud Development Kit](#cloud-development-kit)
  - [Docker and Docker Compose](#docker-and-docker-compose)
  - [Kubernetes](#kubernetes)
  - [Serverless Framework](#serverless-framework)
  - [Terraform](#terraform)
- [Contributing](#contributing)
- [Contributors](#contributors)

## Applications

Collection of examples that were created as a composition of different examples that
can be found separately in the [examples](./examples/) directory.
Read more about the examples in the [examples](#examples) section.

- [Complete AWS Glue example app](./examples/_apps/serverless-glue/)

## Examples

Collection of examples that solve specific problems using small pieces of code.

### Shell Scripting and Utilities

> Collection of shell utilities and scripts.

- [Easy Options](./examples/scripts/easy-options/)

### DevContainers and Codespaces

> Collection of DevContainers that can be used to run local development environments using VSCode
> or Cloud Development environments using GitHub Codespaces.

- [AWS Glue](./examples/devcontainers/glue/)
- [NodeJS](./examples/devcontainers/nodejs/)

### Cloud Development Kit

> TODO

### Docker and Docker Compose

> Collection of Docker and Docker Compose that can be used to run local development environments.
> Most of the examples can be migrated to other containerization tools such as podman.

- [AWS Glue](./examples/docker/glue/)
- [Localstack](./examples/docker/localstack/)
- [MongoDB + Mongo Express](./examples/docker/mongodb/)
- [Microsoft SQL Server](./examples/docker/mssql/)
- [AWS Neptune](./examples/docker/neptune/)
- [PostgreSQL](./examples/docker/postgres/)

### Kubernetes

> TODO

### Serverless Framework

> Collection of Serverless Framework that can be used to run local development environments
> and deploy different resources to the Cloud.

- [AWS Glue with Python Shell and PySpark Jobs](./examples/serverless/serverless-glue/)
- [Neo4j in EC2](./examples/serverless/serverless-neo4j-ec2/)

### Terraform

> TODO

## Contributing

Contributions are welcome!

## Contributors

<a href="https://github.com/nanlabs/infra-reference/contributors">
  <img src="https://contrib.rocks/image?repo=nanlabs/infra-reference"/>
</a>

Made with [contributors-img](https://contrib.rocks).

[shellcheckbadge]: https://github.com/nanlabs/infra-reference/actions/workflows/shellcheck.yml/badge.svg
[tf-checkbadge]: https://github.com/nanlabs/infra-reference/actions/workflows/tf-check.yml/badge.svg
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[shellcheckurl]: https://github.com/nanlabs/infra-reference/actions/workflows/shellcheck.yml
[tf-checkurl]: https://github.com/nanlabs/infra-reference/actions/workflows/tf-check.yml
[licenseurl]: https://github.com/nanlabs/infra-reference/blob/main/LICENSE
