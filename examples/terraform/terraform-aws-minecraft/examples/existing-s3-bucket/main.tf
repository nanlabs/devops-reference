provider "aws" {
  region = var.region
}

module "minecraft" {
  source = "../../"

  name        = "minecraft"
  namespace   = "games"
  environment = "games"

  vpc_id    = "vpc-xxxxxxxxxxxxxxxx"
  subnet_id = "subnet-xxxxxxxxxxxxxxxx"

  minecraft_port        = 25565
  minecraft_root        = "/home/minecraft"
  minecraft_version     = "1.19.3"
  minecraft_backup_freq = 10

  java_ms_mem = "2G"
  java_mx_mem = "2G"


  tags = { By = "me" }
}
