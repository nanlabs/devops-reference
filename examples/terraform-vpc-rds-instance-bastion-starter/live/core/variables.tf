variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "vpc_cidr_block" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "db_name" {
  description = "The name of the database to create"
  type        = string
  default     = "mydb"
}

variable "db_master_username" {
  description = "The username for the master DB user"
  type        = string
  default     = "myuser"
}

// For tags
variable "name" {
  description = "Name to use for servers, tags, etc"
  type        = string
  default     = "name"
}

variable "namespace" {
  description = "Namespace, which could be your organization name or abbreviation, e.g. 'eg' or 'cp'"
  type        = string
  default     = "development"
}

variable "environment" {
  description = "Environment, e.g. 'prod', 'staging', 'dev', 'pre-prod', 'UAT'"
  type        = string
  default     = "development"
}

variable "stage" {
  description = "Stage, e.g. 'build', 'test', 'deploy', 'release'"
  type        = string
  default     = "development"
}

variable "tags" {
  description = "Any extra tags to assign to objects"
  type        = map(any)
  default     = {}
}
