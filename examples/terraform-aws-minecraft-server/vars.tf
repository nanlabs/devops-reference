variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "vpc_id" {
  description = "VPC for security group"
  type        = string
  default     = ""
}

variable "vpc_cidr_block" {
  description = "VPC CIDR Block"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnet_id" {
  description = "VPC subnet id to place the instance"
  type        = string
  default     = ""
}

variable "public_subnet_cidr_block" {
  description = "VPC subnet CIDR Block"
  type        = string
  default     = "10.0.101.0/24"
}

variable "key_name" {
  description = "EC2 key name for provisioning and access"
  type        = string
  default     = ""
}

variable "bucket_name" {
  description = "Bucket name for persisting minecraft world"
  type        = string
  default     = ""
}

variable "bucket_force_destroy" {
  description = "A boolean that indicates all objects should be deleted from the bucket so that the bucket can be destroyed without error. This will destroy your minecraft world!"
  type        = bool
  default     = false
}

variable "bucket_object_versioning" {
  description = "Enable object versioning (default = true). Note this may incur more cost."
  type        = bool
  default     = true
}

// For tags
variable "name" {
  description = "Name to use for servers, tags, etc (e.g. minecraft)"
  type        = string
  default     = "minecraft"
}

variable "namespace" {
  description = "Namespace, which could be your organization name or abbreviation, e.g. 'eg' or 'cp'"
  type        = string
  default     = "games"
}

variable "environment" {
  description = "Environment, e.g. 'prod', 'staging', 'dev', 'pre-prod', 'UAT'"
  type        = string
  default     = "games"
}

variable "tags" {
  description = "Any extra tags to assign to objects"
  type        = map(any)
  default     = {}
}

// Minecraft-specific defaults
variable "minecraft_port" {
  description = "TCP port for minecraft"
  type        = number
  default     = 25565
}

variable "minecraft_root" {
  description = "Where to install minecraft on your instance"
  type        = string
  default     = "/home/minecraft"
}

variable "minecraft_version" {
  description = "Which version of minecraft to install"
  type        = string
  default     = "latest"
}

variable "minecraft_backup_freq" {
  description = "How often (mins) to sync to S3"
  type        = number
  default     = 5
}

// You'll want to tune these next two based on the instance type
variable "minecraft_memory" {
  description = "Java initial and minimum heap size"
  type        = string
  default     = "2G"
}

// Instance vars
variable "associate_public_ip_address" {
  description = "By default, our server has a public IP"
  type        = bool
  default     = true
}

variable "associat_eip" {
  description = "Use an EIP for the instance"
  type        = bool
  default     = false
}

variable "ami" {
  description = "AMI to use for the instance - will default to latest Ubuntu"
  type        = string
  default     = ""
}

// https://aws.amazon.com/ec2/instance-types/
variable "instance_type" {
  description = "EC2 instance type/size - the default is not part of free tier!"
  type        = string
  default     = "t2.medium"
}

variable "allowed_cidrs" {
  description = "Allow these CIDR blocks to the server - default is the Universe"
  type        = string
  default     = "0.0.0.0/0"
}
