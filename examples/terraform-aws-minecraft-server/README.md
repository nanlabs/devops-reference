# Terraform AWS Minecraft

Terraform module to provision a Minecraft server on AWS EC2 using Docker.

## Usage

```hcl
module "minecraft" {
  source = "github.com/nanlabs/devops-reference/examples/terraform-aws-minecraft-server"

  minecraft_version = "1.19.3"
}
```

## Examples

You can find examples in the [examples](./examples) directory.

- [existing-s3-bucket](./examples/existing-s3-bucket) - Use an existing S3 bucket for persisting the Minecraft world
- [full example](./examples/full) - Full example with all options set. This is the default example that will create a new S3 bucket for persisting the Minecraft world.

## Inputs

| Name                        | Description                                                                                                                                                                                                               |        Default         | Required |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------: | :------: |
| allowed_cidrs               | Allow these CIDR blocks to the server - default is the Universe                                                                                                                                                           |       0.0.0.0/0        |          |
| ami                         | AMI to use for the instance                                                                                                                                                                                               |     latest Ubuntu      |          |
| associate_public_ip_address | Toggle public IP                                                                                                                                                                                                          |          true          |          |
| bucket_name                 | Bucket name for persisting minecraft world                                                                                                                                                                                |     generated name     |          |
| environment                 | Environment (for tags)                                                                                                                                                                                                    |          prod          |          |
| instance_type               | EC2 instance type/size                                                                                                                                                                                                    |       t2.medium        |          |
| minecraft_memory            | Java initial and minimum heap size                                                                                                                                                                                        |           2G           |          |
| key_name                    | EC2 key name for provisioning and access                                                                                                                                                                                  |       generated        |          |
| name                        | Name to use for servers, tags, etc (e.g. minecraft)                                                                                                                                                                       |       minecraft        |          |
| namespace                   | Namespace, which could be your organization name or abbreviation (for tags)                                                                                                                                               |         games          |          |
| minecraft_backup_freq       | How often (mins) to sync to S3                                                                                                                                                                                            |           5            |          |
| minecraft_port              | TCP port for minecraft. If you change this from the default, you also need to manually edit the minecraft `server.properties` file in S3 and/or EC2 instannce after the build. (todo: install custom `server.properties`) |         25565          |          |
| minecraft_root              | Where to install minecraft                                                                                                                                                                                                |   `/home/minecraft`    |          |
| minecraft_version           | Which version of minecraft to install                                                                                                                                                                                     |         latest         |          |
| public_subnet_id            | VPC subnet id to place the instance                                                                                                                                                                                       | will create new subnet |          |
| public_subnet_cidr_block    | VPC subnet CIDR block                                                                                                                                                                                                     |     10.0.101.0/24      |          |
| tags                        | Any extra tags to assign to objects                                                                                                                                                                                       |           {}           |          |
| vpc_id                      | VPC for security group                                                                                                                                                                                                    | will create a new VPC  |          |
| vpc_cidr_block              | VPC CIDR block                                                                                                                                                                                                            |      10.0.0.0/16       |          |

## Outputs

| Name                 | Description                        |
| :------------------- | :--------------------------------- |
| ec2_instance_profile | EC2 instance profile               |
| id                   | EC2 instance ID                    |
| public_ip            | Instance public IP                 |
| public_subnet_id     | Subnet ID instance is connected to |
| vpc_id               | VPC ID for instance                |
| ec2_ssh              | SSH command to connect to instance |

## Aknowledgements

This project is based on [terraform-aws-minecraft](https://github.com/darrelldavis/terraform-aws-minecraft) by [Darrell Davis](https://github.com/darrelldavis).
