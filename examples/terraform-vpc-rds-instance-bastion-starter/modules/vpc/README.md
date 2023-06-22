# VPC

Terraform module to bootstrap a VPC for use with our shared infrastructure.

## Usage

```hcl
module "vpc" {
  source = "../../modules/vpc"
  region = "us-east-1"

  name = "shared-vpc"

  vpc_cidr_block = "10.0.0.0/16"
}
```

## Inputs

| Name           | Description                                 |        Default        | Required |
| :------------- | :------------------------------------------ | :-------------------: | :------: |
| name           | Name to use for resources, tags, etc        |          ""           |          |
| tags           | Any extra tags to assign to objects         |          {}           |          |
| vpc_id         | VPC in case you want to use an existing one | will create a new VPC |          |
| vpc_cidr_block | VPC CIDR block                              |      10.0.0.0/16      |          |

## Outputs

| Name             | Description              |
| :--------------- | :----------------------- |
| vpc_id           | VPC ID for instance      |
| public_subnets   | List of public subnets   |
| private_subnets  | List of private subnets  |
| database_subnets | List of database subnets |
| app_subnets      | List of app subnets      |
