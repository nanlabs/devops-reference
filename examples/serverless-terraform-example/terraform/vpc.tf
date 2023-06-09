module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "${var.name}-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = []
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  create_database_subnet_group           = true
  create_database_subnet_route_table     = true
  create_database_internet_gateway_route = true

  enable_dns_hostnames = true
  enable_dns_support   = true
}

resource "aws_security_group" "main" {
  vpc_id = "${module.vpc.default_vpc_id}"

  name        = "${var.name}-sg"
  description = "Allow all inbound traffic to MySQL"

  ingress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
