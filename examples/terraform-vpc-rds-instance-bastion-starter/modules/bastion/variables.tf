variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "vpc_id" {
  description = "VPC id in which the EC2 instance is to be created."
  type        = string
}

variable "subnets" {
  description = "List of private subnets in which the EC2 instance is to be created."
  type        = list(string)
}

variable "associate_public_ip_address" {
  description = "By default, our server has a public IP"
  type        = bool
  default     = true
}

variable "associate_elastic_ip_address" {
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

variable "key_name" {
  description = "SSH key name to use for the instance"
  type        = string
  default     = ""
}

variable "name" {
  description = "Name to be used on all the resources as identifier"
  type        = string
  default     = ""
}

variable "tags" {
  description = "Any extra tags to assign to objects"
  type        = map(any)
  default     = {}
}
