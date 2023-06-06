module "ec2_security_group" {
  source  = "terraform-aws-modules/security-group/aws"
  version = "4.17.1"

  name        = "${var.name}-ec2"
  description = "Allow SSH"
  vpc_id      = var.vpc_id

  ingress_cidr_blocks = [var.allowed_cidrs]
  ingress_rules       = ["ssh-tcp"]
  egress_rules        = ["all-all"]

  tags = var.tags
}
