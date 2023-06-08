locals {
  _ssh_key_name = length(var.key_name) > 0 ? var.key_name : aws_key_pair.ec2_ssh[0].key_name
}

// Script to configure the server - this is where most of the magic occurs!
data "template_file" "user_data" {
  template = file("${path.module}/templates/cloud-init-docker.yml")
}

// EC2 instance for the server - tune instance_type to fit your performance and budget requirements
module "bastion" {
  source  = "terraform-aws-modules/ec2-instance/aws"
  version = "~> 3.0"

  name = "${var.name}-public"

  # instance
  key_name             = local._ssh_key_name
  ami                  = var.ami != "" ? var.ami : data.aws_ami.ubuntu.image_id
  instance_type        = var.instance_type
  iam_instance_profile = aws_iam_instance_profile.bastion_instance_profile.id
  user_data            = data.template_file.user_data.rendered

  # network
  subnet_id                   = element(var.subnets, 0)
  vpc_security_group_ids      = [module.ec2_security_group.security_group_id]
  associate_public_ip_address = var.associate_public_ip_address

  tags = var.tags
}
