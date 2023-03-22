locals {
  _ssh_key_name = length(var.key_name) > 0 ? var.key_name : aws_key_pair.ec2_ssh[0].key_name
}

// Script to configure the server - this is where most of the magic occurs!
data "template_file" "user_data" {
  template = file("${path.module}/templates/cloud-init-docker.yml")

  vars = {
    minecraft_root        = var.minecraft_root
    minecraft_bucket      = local.bucket
    minecraft_backup_freq = var.minecraft_backup_freq
    minecraft_version     = var.minecraft_version
    minecraft_memory      = var.minecraft_memory
  }
}

// EC2 instance for the server - tune instance_type to fit your performance and budget requirements
module "ec2_minecraft" {
  source  = "terraform-aws-modules/ec2-instance/aws"
  version = "~> 3.0"

  name = "${var.name}-public"

  # instance
  key_name             = local._ssh_key_name
  ami                  = var.ami != "" ? var.ami : data.aws_ami.ubuntu.image_id
  instance_type        = var.instance_type
  iam_instance_profile = aws_iam_instance_profile.docker-instance-profile.id
  user_data            = data.template_file.user_data.rendered

  # network
  subnet_id                   = local.public_subnet_id
  vpc_security_group_ids      = [module.ec2_security_group.security_group_id]
  associate_public_ip_address = var.associate_public_ip_address

  tags = module.label.tags
}

// Security group for our instance - allows SSH and minecraft
module "ec2_security_group" {
  source  = "terraform-aws-modules/security-group/aws"
  version = "4.17.1"

  name        = "${var.name}-ec2"
  description = "Allow SSH and TCP ${var.minecraft_port}"
  vpc_id      = local.vpc_id

  ingress_cidr_blocks = [var.allowed_cidrs]
  ingress_rules       = ["ssh-tcp"]
  ingress_with_cidr_blocks = [
    {
      from_port   = var.minecraft_port
      to_port     = var.minecraft_port
      protocol    = "tcp"
      description = "Minecraft server"
      cidr_blocks = var.allowed_cidrs
    },
  ]
  egress_rules = ["all-all"]

  tags = module.label.tags
}

module "eip" {
  source  = "terraform-aws-modules/eip/aws"
  version = "2.2.0"

  count = var.associat_eip ? 1 : 0

  vpc      = true
  instance = module.ec2_minecraft.this_instance_id

  tags = module.label.tags
}
