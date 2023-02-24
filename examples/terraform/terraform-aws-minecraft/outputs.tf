output "vpc_id" {
  value = local.vpc_id
}

output "public_subnet_id" {
  value = local.public_subnet_id
}

output "public_ip" {
  value = module.ec2_minecraft.public_ip
}

output "instance_id" {
  value = module.ec2_minecraft.id
}

output "ec2_ssh" {
  value = length(var.key_name) > 0 ? "" : "ssh -i ${path.module}/ec2-private-key.pem ubuntu@${module.ec2_minecraft.public_ip}"
}

output "ec2_instance_profile" {
  value = aws_iam_instance_profile.docker-instance-profile.name
}

output "minecraft_server" {
  value = "${module.ec2_minecraft.public_ip}:${var.minecraft_port}"
}
