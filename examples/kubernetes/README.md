
### Staring minikube for local running

    minikube start --kubernetes-version=v1.24.3

  NOTICE: tested on standard docker installation. if you use rootless mode, check [minikube documentation](https://minikube.sigs.k8s.io/docs/drivers/docker/#requirements) and [rootless documentation](https://rootlesscontaine.rs/getting-started/kubernetes/#minikube)


### Enabling ingress in minikube

    minikube addons enable ingress


### Apply changes

    kubectl apply -f plain-ingress


### Setup example.com for making it possible to be run locally

    echo "$(minikube ip) example.com" | sudo tee -a /etc/hosts


### Checking changes

     curl example.com 


### Delete artifacts and workloads

    kubectl delete -f plain-ingress
