module "rds" {
  source = "../../modules/rds"
  region = var.region

  name = module.label.id

  vpc_id          = module.vpc.vpc_id
  db_subnet_group = module.vpc.database_subnet_group

  db_name            = var.db_name
  db_master_username = var.db_master_username
  db_port            = 5432

  tags = module.label.tags
}
