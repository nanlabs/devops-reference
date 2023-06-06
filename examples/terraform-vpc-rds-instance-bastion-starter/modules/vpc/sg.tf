module "app_security_group" {
  source  = "terraform-aws-modules/security-group/aws"
  version = "~> 4.0"

  name        = "${var.name}-app-security-group"
  description = "Security group to be used for application servers"
  vpc_id      = module.vpc.vpc_id

  egress_rules = ["all-all"]

  tags = var.tags
}
