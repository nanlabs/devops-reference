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
