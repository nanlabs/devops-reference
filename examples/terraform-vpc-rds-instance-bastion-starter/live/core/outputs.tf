output "vpc_id" {
  description = "value of the vpc_id output from the vpc module"
  value       = module.vpc.vpc_id
}

output "public_subnets" {
  description = "value of the public_subnets output from the vpc module"
  value       = module.vpc.public_subnets
}

output "private_subnets" {
  description = "value of the private_subnets output from the vpc module"
  value       = module.vpc.private_subnets
}

output "database_subnet_group" {
  description = "value of the database_subnet_group output from the vpc module"
  value       = module.vpc.database_subnet_group
}


# rds outputs
output "postgresql_db_instance_address" {
  description = "The address of the RDS instance"
  value       = module.rds.db_instance_address
}

output "postgresql_db_instance_arn" {
  description = "The ARN of the RDS instance"
  value       = module.rds.db_instance_arn
}

output "postgresql_db_instance_availability_zone" {
  description = "The availability zone of the RDS instance"
  value       = module.rds.db_instance_availability_zone
}

output "postgresql_db_instance_endpoint" {
  description = "The connection endpoint"
  value       = module.rds.db_instance_endpoint
}

output "postgresql_db_instance_engine" {
  description = "The database engine"
  value       = module.rds.db_instance_engine
}

output "postgresql_db_instance_engine_version_actual" {
  description = "The running version of the database"
  value       = module.rds.db_instance_engine_version_actual
}

output "postgresql_db_instance_hosted_zone_id" {
  description = "The canonical hosted zone ID of the rds DB instance (to be used in a Route 53 Alias record)"
  value       = module.rds.db_instance_hosted_zone_id
}

output "postgresql_db_instance_identifier" {
  description = "The RDS instance ID"
  value       = module.rds.db_instance_identifier
}

output "postgresql_db_instance_resource_id" {
  description = "The RDS Resource ID of this instance"
  value       = module.rds.db_instance_resource_id
}

output "postgresql_db_instance_status" {
  description = "The RDS instance status"
  value       = module.rds.db_instance_status
}

output "postgresql_db_instance_name" {
  description = "The database name"
  value       = module.rds.db_instance_name
}

output "postgresql_db_instance_username" {
  description = "The master username for the database"
  value       = module.rds.db_instance_username
  sensitive   = true
}

output "postgresql_db_instance_port" {
  description = "The database port"
  value       = module.rds.db_instance_port
}

output "postgresql_db_subnet_group_id" {
  description = "The rds db subnet group name"
  value       = module.rds.db_subnet_group_id
}

output "postgresql_db_subnet_group_arn" {
  description = "The ARN of the rds db subnet group"
  value       = module.rds.db_subnet_group_arn
}

output "postgresql_db_parameter_group_id" {
  description = "The rds db parameter group id"
  value       = module.rds.db_parameter_group_id
}

output "postgresql_db_parameter_group_arn" {
  description = "The ARN of the rds db parameter group"
  value       = module.rds.db_parameter_group_arn
}

output "postgresql_db_enhanced_monitoring_iam_role_arn" {
  description = "The Amazon Resource Name (ARN) specifying the monitoring role"
  value       = module.rds.db_enhanced_monitoring_iam_role_arn
}

output "instance_id" {
  value = module.bastion.instance_id
}

output "ec2_ssh" {
  value = module.bastion.ec2_ssh
}

output "ec2_instance_profile" {
  value = module.bastion.ec2_instance_profile
}
