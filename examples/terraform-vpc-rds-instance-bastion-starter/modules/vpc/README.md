# Shared VPC

Terraform module to bootstrap a VPC for use with our shared infrastructure.

## Usage

```hcl
module "vpc" {
  source = "../modules/vpc"

  name = "nanlabs"
  environment = "staging"
  namespace = "example-namespace"

  region = var.region

  vpc_cidr_block = "10.0.0.0/16"
}
```

## Inputs

| Name           | Description                                                                 |        Default        | Required |
| :------------- | :-------------------------------------------------------------------------- | :-------------------: | :------: |
| environment    | Environment (for tags)                                                      |         prod          |          |
| name           | Name to use for servers, tags, etc (e.g. minecraft)                         |       minecraft       |          |
| namespace      | Namespace, which could be your organization name or abbreviation (for tags) |         games         |          |
| tags           | Any extra tags to assign to objects                                         |          {}           |          |
| vpc_id         | VPC in case you want to use an existing one                                 | will create a new VPC |          |
| vpc_cidr_block | VPC CIDR block                                                              |      10.0.0.0/16      |          |

## Outputs

| Name             | Description              |
| :--------------- | :----------------------- |
| vpc_id           | VPC ID for instance      |
| public_subnets   | List of public subnets   |
| private_subnets  | List of private subnets  |
| database_subnets | List of database subnets |
