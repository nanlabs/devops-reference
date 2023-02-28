resource "aws_cloudwatch_log_group" "minecraft" {
  name = "${module.label.id}-minecraft"
}
