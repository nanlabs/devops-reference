module "vpc" {
  source             = "../../modules/vpc"
  name               = module.label.id
  region             = var.region
  vpc_cidr_block     = var.vpc_cidr_block
  tags               = module.label.tags
  enable_nat_gateway = true
  single_nat_gateway = true
}
