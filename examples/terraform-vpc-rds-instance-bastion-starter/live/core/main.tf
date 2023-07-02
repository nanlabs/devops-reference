provider "aws" {
  region = var.region

  default_tags {
    tags = {
      Terraform = true
    }
  }
}

data "aws_caller_identity" "aws" {}

locals {
  tf_tags = {
    Terraform = true,
    By        = data.aws_caller_identity.aws.arn
  }
}

// Keep labels, tags consistent
module "label" {
  source  = "cloudposse/label/null"
  version = "0.25.0"

  name        = var.name
  environment = var.environment
  namespace   = var.namespace
  stage       = var.stage

  delimiter   = "-"
  label_order = ["environment", "stage", "name", "attributes"]
  tags        = merge(var.tags, local.tf_tags)
}

# You cannot create a new backend by simply defining this and then
# immediately proceeding to "terraform apply". The S3 backend must
# be bootstrapped according to the simple yet essential procedure in
# https://github.com/cloudposse/terraform-aws-tfstate-backend#usage
module "terraform_state_backend" {
  source     = "cloudposse/tfstate-backend/aws"
  version    = "1.1.1"
  name       = var.name
  namespace  = var.namespace
  stage      = var.stage
  attributes = ["state"]

  terraform_backend_config_file_path = "./backends"
  terraform_backend_config_file_name = "${var.environment}.tf"

  bucket_enabled   = true
  dynamodb_enabled = true

  force_destroy = false
}
