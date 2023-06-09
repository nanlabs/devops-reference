provider "aws" {
  region = "us-east-1"
}

resource "aws_db_instance" "default" {
  allocated_storage      = 10
  storage_type           = "gp2"
  engine                 = "mysql"
  engine_version         = "5.7"
  instance_class         = "db.t2.micro"
  name                   = "${var.name}"
  username               = "${var.user}"
  password               = "${random_string.password.result}"
  parameter_group_name   = "default.mysql5.7"
  multi_az               = false
  publicly_accessible    = true
  skip_final_snapshot    = true
  db_subnet_group_name   = "${module.vpc.database_subnet_group}"
  vpc_security_group_ids = ["${aws_security_group.main.id}"]
}
