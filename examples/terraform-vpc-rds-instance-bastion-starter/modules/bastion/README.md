# Bastion Host

Terraform module to bootstrap a bastion host in AWS using EC2.

## Usage

```hcl
module "bastion" {
  source                       = "../../modules/bastion"
  region = "us-east-1"

  name                         = "example-bastion"

  vpc_id                       = "vpc-1234567890"
  subnets                      = ["subnet-1234567890", "subnet-0987654321"]
  associate_public_ip_address  = true
  associate_elastic_ip_address = true
}
```

## Inputs

| Name                         | Description                                                  |   Default   | Required |
| :--------------------------- | :----------------------------------------------------------- | :---------: | :------: |
| name                         | Name to use for resources, tags, etc                         |     ""      |          |
| tags                         | Any extra tags to assign to objects                          |     {}      |          |
| region                       | Region to deploy to                                          | "us-east-1" |          |
| vpc_id                       | VPC to use for resources                                     |     ""      |    ✅    |
| subnets                      | Subnets to use for resources                                 |     []      |    ✅    |
| associate_public_ip_address  | Whether to associate a public IP address with the instance   |    true     |          |
| associate_elastic_ip_address | Whether to associate an elastic IP address with the instance |    false    |          |
| ami                          | AMI to use for the instance                                  |     ""      |          |
| instance_type                | Instance type to use                                         | "t2.medium" |          |
| allowed_cidrs                | List of CIDRs to allow SSH access from                       | "0.0.0.0/0" |          |
| key_name                     | Name of the key pair to use for SSH access                   |     ""      |          |

## Outputs

| Name                 | Description                                       |
| :------------------- | :------------------------------------------------ |
| instance_id          | ID of the bastion host                            |
| ec2_ssh              | SSH command to connect to the bastion host        |
| ec2_instance_profile | IAM instance profile attached to the bastion host |
