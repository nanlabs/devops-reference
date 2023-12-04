# Tilt + Minikube Development Environment 🚀

Welcome to a seamless, efficient, and developer-friendly Kubernetes development experience! This repository combines the power of [Tilt](https://tilt.dev/) and [Minikube](https://minikube.sigs.k8s.io/) to supercharge your microservices development. Say goodbye to complex configurations and hello to streamlined development!

## Why This Demo Matters

This demo isn't just about showcasing two impressive microservices. It's about empowering developers to harness the agility of Kubernetes without the steep learning curve. We've crafted an environment that's easy to set up, intuitive to navigate, and accelerates your development workflow.

## What's Inside? 🏗️

In this example, you'll find the following components:

### Microservices 📦

1. **Node.js with Nest.js** 🟢
   A beautifully crafted Nest.js API, complete with Swagger integration for effortless exploration.

2. **Python with FastAPI** 🐍
   Dive into FastAPI's high-performance world! Another RESTful API flaunting a Swagger interface for swift exploration.

### Kubernetes 🚢

1. **Ingress** 🛣️
   Easily route traffic to your microservices with Ingress.

2. **Namespaces** 📁
   Organize your microservices with namespaces.

3. **Deployments** 🚀
   Deploy your microservices with ease.

4. **Services** 📡
   Expose your microservices with services.

### Tilt 🚀

1. **Tiltfile** 📜
   Configure your development environment with Tilt.

## Getting Started 🚦

1. **Clone This Repository**
2. **Move Into the Example Directory**
3. **Install Minikube**: Follow [Minikube's installation guide](https://minikube.sigs.k8s.io/docs/start/) if you haven't already.
4. **Install Tilt**: Refer to [Tilt's installation guide](https://docs.tilt.dev/install.html).

### Starting Minikube and Tilt

```sh
minikube start
tilt up
```

Once initiated, visit [http://localhost:10350/](http://localhost:10350/) to explore the Tilt dashboard.

### Enable Ingress and Tunnel

To access your microservices, you'll need to enable Ingress and tunnel to your cluster. Run the following commands to do so:

```sh
minikube addons enable ingress
minikube tunnel
```

## Explore the Microservices

Use the Tilt dashboard to explore your microservices, view logs, and more. Click the `View` button next to each service to access its Swagger UI.

## Understanding the Code 🧐

### Ingress

The `k8s/ingress.yml` routes traffic to the microservices. Enable it with:

### Namespaces

Organize microservices using the `k8s/namespaces.yml` file, making management a breeze.

### Microservices

Each microservice in the `apps` directory has the following key components:

#### Dockerfile 🐳

The `Dockerfile` defines the microservice's Docker image. Customize it to your liking!

#### Kubernetes YAML Files 📄

The `k8s` directory contains the Kubernetes YAML files for each microservice. Each microservice has a `deployment.yml` and `service.yml` file:

- `deployment.yml`: Defines the microservice's deployment. A deployment is a Kubernetes object that manages a replicated application. It creates Pods and ReplicaSets to ensure the desired number of Pods are running and available.
- `service.yml`: Defines the microservice's service. A service is a Kubernetes object that exposes an application running on a set of Pods as a network service.

## Tiltfile 📜

The `Tiltfile` configures Tilt. Customize your dev environment and add more microservices here.

### Directory Structure 📁

Summarizing everything above, here's the directory structure of this repository:

```txt
.
├── apps
│   ├── node-nestjs-app
│   │   ├── k8s
│   │   │   ├── deployment.yml
│   │   │   └── service.yml
│   │   ├── Dockerfile
│   │   └── README.md
│   └── python-fastapi-app
│       ├── k8s
│       │   ├── deployment.yml
│       │   └── service.yml
│       ├── Dockerfile
│       └── README.md
├── k8s
│   ├── ingress.yml
│   └── namespaces.yml
├── README.md
└── Tiltfile
```
