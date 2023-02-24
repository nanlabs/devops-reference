output "vpc_id" {
  value = module.minecraft.vpc_id
}

output "public_subnet_id" {
  value = module.minecraft.public_subnet_id
}

output "public_ip" {
  value = module.minecraft.public_ip
}

output "instance_id" {
  value = module.minecraft.instance_id
}

output "ec2_ssh" {
  value = module.minecraft.ec2_ssh
}

output "ec2_instance_profile" {
  value = module.minecraft.ec2_instance_profile
}

output "minecraft_server" {
  value = module.minecraft.minecraft_server
}
