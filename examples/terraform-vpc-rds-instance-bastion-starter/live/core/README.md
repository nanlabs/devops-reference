# Core Infrastructure

This is where we keep our infrastructure as code for our cloud infrastructure.

## Deployment

### Prerequisites

- [Terraform](https://www.terraform.io/downloads.html)

### Initialize

```sh
terraform init -backend-config ./backends/staging.s3.tfbackend
```

### 🚀 Deploy

```sh
terraform plan -var-file ./configs/staging.tfvars -out ./staging.tfplan
terraform apply ./staging.tfplan
```

### 💣 Destroy

```sh
terraform destroy -var-file ./configs/staging.tfvars
```
