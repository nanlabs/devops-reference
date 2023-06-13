# Create a random initial password for the RDS Postgres
resource "random_password" "rds_password" {
  length           = 16
  special          = true
  override_special = "_%@"
}

locals {
  # if var.db_master_password is not set, use the random password
  password = var.db_master_password != "" ? var.db_master_password : random_password.rds_password.result
  username = var.db_master_username
}

resource "aws_secretsmanager_secret" "secret" {
  description = "RDS Postgres Credentials of ${var.db_name} service"
  name        = "${var.name}/rds-postgresql-connection-secret"
}

resource "aws_secretsmanager_secret_version" "secret" {
  lifecycle {
    ignore_changes = [
      secret_string
    ]
  }
  secret_id     = aws_secretsmanager_secret.secret.id
  secret_string = <<EOF
{
  "username": "${local.username}",
  "password": "${local.password}",
  "engine": "${module.db.db_instance_engine}",
  "host": "${module.db.db_instance_address}",
  "port": ${module.db.db_instance_port},
  "dbname" : "${var.db_name}"
}
EOF
}
