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

output "zzz_ec2_ssh" {
  value = length(var.key_name) > 0 ? "" : <<EOT

ssh -i ${path.module}/ec2-private-key.pem ubuntu@${module.ec2_minecraft.public_ip[0]}

EOT
}

output "ec2_instance_profile" {
  value = aws_iam_instance_profile.docker-instance-profile.name
}

output "minecraft_server" {
  value = "${module.ec2_minecraft.public_ip[0]}:${var.minecraft_port}"
}
