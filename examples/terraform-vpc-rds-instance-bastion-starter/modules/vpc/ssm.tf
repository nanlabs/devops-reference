resource "aws_ssm_parameter" "vpc_id" {
  name  = "/${var.name}/vpc_id"
  type  = "String"
  value = module.vpc.vpc_id
}

resource "aws_ssm_parameter" "db_subnets" {
  name  = "/${var.name}/db_subnets"
  type  = "StringList"
  value = join(",", module.vpc.database_subnets)
}

resource "aws_ssm_parameter" "public_subnets" {
  name  = "/${var.name}/public_subnets"
  type  = "StringList"
  value = join(",", module.vpc.public_subnets)
}

resource "aws_ssm_parameter" "private_subnets" {
  name  = "/${var.name}/private_subnets"
  type  = "StringList"
  value = join(",", module.vpc.private_subnets)
}

resource "aws_ssm_parameter" "app_subnets" {
  name  = "/${var.name}/app_subnets"
  type  = "StringList"
  value = join(",", module.vpc.private_subnets)
}

resource "aws_ssm_parameter" "app_security_group" {
  name  = "/${var.name}/app_security_group"
  type  = "String"
  value = module.app_security_group.security_group_id
}
