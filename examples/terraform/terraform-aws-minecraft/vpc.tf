locals {
  use_existing_vpc           = length(var.vpc_id) > 0 ? true : false
  use_existing_public_subnet = length(var.public_subnet_id) > 0 ? true : false
}

locals {
  vpc_id           = local.use_existing_vpc ? var.vpc_id : module.vpc.vpc_id
  public_subnet_id = local.use_existing_public_subnet ? var.public_subnet_id : module.vpc.public_subnets[0]
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 3.0"

  name = "my-vpc"

  create_vpc = local.use_existing_vpc ? false : true

  cidr                 = var.vpc_cidr
  create_igw           = true
  enable_nat_gateway   = false
  azs                  = ["${var.region}a"]
  public_subnets       = [var.public_subnet_cidr]
  private_subnets      = []
  enable_dns_hostnames = true

  tags = module.label.tags
}



