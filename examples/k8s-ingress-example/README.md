# Ingress on K8s

This example shows how to use Ingress on Kubernetes. We use `minikube` to run a local Kubernetes cluster.

## Sample ingress setup

### Starting minikube for local running

> NOTE: tested on standard docker installation. if you use rootless mode, check [minikube documentation](https://minikube.sigs.k8s.io/docs/drivers/docker/#requirements) and [rootless documentation](https://rootlesscontaine.rs/getting-started/kubernetes/#minikube)

```sh
minikube start --kubernetes-version=v1.24.3
```

### Enabling ingress in minikube

```sh
minikube addons enable ingress
```

### Adding TLS

#### Generate self-signed certificate

```sh
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout tls.key -out tls.crt -subj "/CN=example.com" -days 365
```

```sh
kubectl create secret tls example-com-tls --cert=tls.crt --key=tls.key --dry-run=client -oyaml > ingress/example-com-tls.yaml
```

#### Checking tls setup in the ingress controller manifest, [ingress.yaml](./ingress.yaml)

```yaml
spec:
  tls:
    - secretName: example-com-tls
      hosts:
        - example.com
```

### Apply changes

```sh
kubectl apply -f ingress
```

### Setup example.com for making it possible to be run locally

```sh
echo "$(minikube ip) example.com" | sudo tee -a /etc/hosts
```

### Checking changes

```sh
curl --insecure https://example.com
```

### Clean up

#### Delete artifacts and workloads

```sh
kubectl delete -f ingress
```

#### Remove entry in the /etc/hosts, if it was added as last line

```sh
sudo sed '$d' --in-place /etc/hosts
```
