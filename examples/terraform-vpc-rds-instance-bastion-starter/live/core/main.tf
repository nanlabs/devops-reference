provider "aws" {
  region = var.region
}

// Keep labels, tags consistent
module "label" {
  source  = "cloudposse/label/null"
  version = "0.25.0"

  name        = var.name
  environment = var.environment
  namespace   = var.namespace

  delimiter   = "-"
  label_order = ["environment", "stage", "name", "attributes"]
  tags        = merge(var.tags, local.tf_tags)
}

data "aws_caller_identity" "aws" {}

locals {
  tf_tags = {
    Terraform = true,
    By        = data.aws_caller_identity.aws.arn
  }
}

module "vpc" {
  source         = "../../modules/vpc"
  name           = module.label.id
  region         = var.region
  vpc_cidr_block = var.vpc_cidr_block
  tags           = module.label.tags
}

module "bastion" {
  source                       = "../../modules/bastion"
  name                         = module.label.id
  region                       = var.region
  vpc_id                       = module.vpc.vpc_id
  subnets                      = module.vpc.public_subnets
  associate_public_ip_address  = true
  associate_elastic_ip_address = false
  tags                         = module.label.tags
}

module "rds" {
  source = "../../modules/rds"
  name   = module.label.id
  region = var.region

  vpc_id          = module.vpc.vpc_id
  db_subnet_group = module.vpc.database_subnet_group

  db_name            = var.db_name
  db_master_username = var.db_master_username
  db_port            = 5432

  tags = module.label.tags
}
