output "instance_id" {
  value = module.bastion.id
}

output "ec2_ssh" {
  value = length(var.key_name) > 0 ? "" : "ssh -i ${path.module}/ec2-private-key.pem ubuntu@${module.bastion.public_ip}"
}

output "ec2_instance_profile" {
  value = aws_iam_instance_profile.bastion_instance_profile.name
}
