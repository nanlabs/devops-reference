# AWS Infrastructure Terraform Starter Kit

This is a starter kit for creating AWS infrastructure using Terraform. It
contains a VPC, RDS instance, and a bastion host.

## Live

We keep our live infrastructure in the `live` directory. This is where we keep
our Terraform variables, backend configuration, and our Terraform root modules.

| Module                                       | Description                                        |
| :------------------------------------------- | :------------------------------------------------- |
| [Core Infrastructure](./live/core/README.md) | Terraform root module for our core infrastructure. |

## Terraform Modules

We have custom Terraform modules that we use to bootstrap our infrastructure. We
keep them in the `modules` directory.

| Module                                             | Description                                                                 |
| :------------------------------------------------- | :-------------------------------------------------------------------------- |
| [VPC](./modules/vpc/README.md)                     | Terraform module to bootstrap a VPC for use with our shared infrastructure. |
| [RDS Postgres](./modules/rds-postgresql/README.md) | Terraform module to bootstrap a RDS Postgres instance.                      |
| [Bastion](./modules/bastion/README.md)             | Terraform module to bootstrap a bastion host.                               |
