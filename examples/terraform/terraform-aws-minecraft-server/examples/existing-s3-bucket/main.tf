provider "aws" {
  region = var.region
}

module "minecraft" {
  source = "../../"

  bucket_name = "games-minecraft-abcdef123456"
}
