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

output "app_security_group" {
  description = "value of the app_security_group output from the vpc module"
  value       = module.app_security_group.security_group_id
}
