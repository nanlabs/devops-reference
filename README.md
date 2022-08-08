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

- [Examples](#examples)
  - [Shell Scripting and Utilities](#shell-scripting-and-utilities)
  - [Cloud Development Kit](#cloud-development-kit)
  - [Docker and Docker Compose](#docker-and-docker-compose)
  - [Kubernetes](#kubernetes)
  - [Serverless Framework](#serverless-framework)
- [Contributing](#contributing)
- [Contributors](#contributors)

## Examples

### Shell Scripting and Utilities

- [AWS SSO](./examples/scripts/aws-sso/)
- [Easy Options](./examples/scripts/easy-options/)

### Cloud Development Kit

> TODO

### Docker and Docker Compose

- [AWS Glue](./examples/docker/glue/)
- [Localstack](./examples/docker/localstack/)
- [MongoDB + Mongo Express](./examples/docker/mongodb/)
- [Microsoft SQL Server](./examples/docker/mssql/)
- [AWS Neptune](./examples/docker/neptune/)
- [PostgreSQL](./examples/docker/postgres/)

### Kubernetes

> TODO

### Serverless Framework

- [AWS Glue](./examples/serverless/serverless-glue/)
- [Neo4j in EC2](./examples/serverless/serverless-neo4j-ec2/)

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
