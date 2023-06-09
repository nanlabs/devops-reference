variable "name" {
  default = "testdb"
}

resource "random_string" "password" {
  length  = 16
  special = false
}

variable "user" {
  default = "serverless"
}
