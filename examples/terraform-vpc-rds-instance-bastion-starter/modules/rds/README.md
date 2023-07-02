# RDS Postgres Instance Module

Terraform module to bootstrap a RDS Postgres instance.

## Usage

```hcl
module "db" {
  source = "../../modules/rds"
  region = "us-east-1"

  name = "exampled-rds-instance"

  vpc_id          = "vpc-1234567890"
  db_subnet_group = "db-subnet-group-1234567890"

  db_name            = "db_name"
  db_master_username = "db_master_username"
  db_port            = 5432

  db_family               = "postgres11"
  db_engine               = "postgres"
  db_engine_version       = "11.16"
  db_major_engine_version = "11"

  db_instance       = "db.t2.micro"
  storage_encrypted = false
}
```

## Inputs

| Name                       | Description                                          |        Default        | Required |
| :------------------------- | :--------------------------------------------------- | :-------------------: | :------: |
| name                       | Name to use for resources, tags, etc                 |          ""           |          |
| tags                       | Any extra tags to assign to objects                  |          {}           |          |
| region                     | Region to deploy to                                  |      "us-east-1"      |          |
| vpc_id                     | VPC to use for resources                             |          ""           |    ✅    |
| enable_multi_az            | Enable multi-az deployment                           |         false         |          |
| db_subnet_group            | DB subnet group to use for resources                 |          ""           |    ✅    |
| db_name                    | Name of the database to create                       |        "name"         |          |
| db_master_username         | Username for the master user                         |        "name"         |          |
| db_master_password         | Password for the master user                         |          ""           |    ✅    |
| db_port                    | Port for the database                                |         5432          |          |
| db_instance                | Instance type to use for the database                |    "db.t4g.large"     |          |
| db_engine                  | Database engine to use                               |      "postgres"       |          |
| db_engine_version          | Database engine version to use                       |         "14"          |          |
| db_family                  | Database family to use                               |     "postgres14"      |          |
| db_major_engine_version    | Database major engine version to use                 |         "14"          |          |
| db_storage_type            | Storage type to use for the database                 |         "gp2"         |          |
| storage_encrypted          | Encrypt the database storage                         |         true          |          |
| db_allocated_storage       | Size of the database storage to allocate             |          20           |          |
| db_max_allocated_storage   | Maximum size of the database storage to allocate     |          100          |          |
| db_maintenance_window      | Maintenance window for the database                  | "Mon:00:00-Mon:03:00" |          |
| db_backup_window           | Backup window for the database                       |     "03:00-06:00"     |          |
| db_backup_retention_period | Backup retention period for the database             |           7           |          |
| enable_skip_final_snapshot | Skip the final snapshot when destroying the database |         true          |          |
| enable_public_access       | Enable public access to the database                 |         false         |          |

## Outputs

| Name                                | Description                               |
| :---------------------------------- | :---------------------------------------- |
| db_instance_address                 | Database instance address                 |
| db_instance_arn                     | Database instance ARN                     |
| db_instance_availability_zone       | Database instance availability zone       |
| db_instance_endpoint                | Database instance endpoint                |
| db_instance_engine                  | Database instance engine                  |
| db_instance_engine_version_actual   | Database instance engine version actual   |
| db_instance_hosted_zone_id          | Database instance hosted zone ID          |
| db_instance_identifier              | Database instance ID                      |
| db_instance_resource_id             | Database instance resource ID             |
| db_instance_status                  | Database instance status                  |
| db_instance_name                    | Database instance name                    |
| db_instance_username                | Database instance username                |
| db_instance_password                | Database instance password                |
| db_instance_port                    | Database instance port                    |
| db_subnet_group_id                  | Database subnet group ID                  |
| db_subnet_group_arn                 | Database subnet group ARN                 |
| db_parameter_group_id               | Database parameter group ID               |
| db_parameter_group_arn              | Database parameter group ARN              |
| db_enhanced_monitoring_iam_role_arn | Database enhanced monitoring IAM role ARN |
| db_instance_cloudwatch_log_groups   | Database instance CloudWatch log groups   |
