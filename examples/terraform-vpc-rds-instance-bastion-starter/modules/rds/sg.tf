data "aws_vpc" "main" {
  id = var.vpc_id
}

module "security_group" {
  source  = "terraform-aws-modules/security-group/aws"
  version = "~> 4.0"

  name        = "${var.name}-rds-security-group"
  description = "Security group for ${var.name}-rds"
  vpc_id      = var.vpc_id

  ingress_with_cidr_blocks = [
    {
      from_port   = 5432
      to_port     = 5432
      protocol    = "tcp"
      description = "PostgreSQL access from within VPC"
      cidr_blocks = data.aws_vpc.main.cidr_block
    }
  ]

  egress_rules = ["all-all"]

  tags = var.tags
}
