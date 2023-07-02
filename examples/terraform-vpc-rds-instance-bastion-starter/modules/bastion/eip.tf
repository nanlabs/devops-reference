resource "aws_eip" "eip" {
  count = var.associate_elastic_ip_address ? 1 : 0

  instance = module.bastion.id
  domain   = "vpc"

  tags = var.tags
}
