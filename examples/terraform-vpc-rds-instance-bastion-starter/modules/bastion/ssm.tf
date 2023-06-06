resource "aws_ssm_parameter" "bastion_ssh" {
  count = length(var.key_name) > 0 ? 0 : 1

  name  = "/${var.name}/bastion_ssh"
  type  = "String"
  value = local_file.private_key[0].content
}
