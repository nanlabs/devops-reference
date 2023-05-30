# Klotho

Klotho is an open-source Architecture/Infrastructure-from-Code tool designed to enable developers to build adaptable systems that can evolve over time.

The main focus of Klotho is to minimize the amount of code required for writing and managing cloud applications and systems. By utilizing static and runtime analysis, it automatically infers the architecture and generates infrastructure-as-code, similar to tools like Terraform or Pulumi. Klotho employs an in-code annotation system that allows developers to declaratively incorporate cloud behaviors into their code, while also enabling operators to reshape and adapt the underlying technologies and tools used by the cloud applications.

## Infrastructure from Code

Infrastructure-from-Code (IfC) is a process that analyzes your application code to deduce the necessary cloud resources and automatically creates and maintains them, eliminating the need for manual definition.

Instead of relying on manual configuration, IfC automatically exposes the web server to the internet based on its presence in the code. The setup of components becomes an implementation detail handled by the tool. Initially, relinquishing control may seem daunting, but we believe it unlocks a significant increase in productivity, as companies can concentrate on their core services rather than undifferentiated tasks.

Different providers offer various approaches to IfC, each with their own perspective on its structure. However, they all share the overarching vision of allowing the service code to communicate the majority of requirements, while the IfC tool transforms those requirements into infrastructure. The degree of coupling between the service-level code and IfC tools may vary across these approaches.

## How it Works

Klotho leverages static analysis to create an adaptive architecture based on in-code annotations it introduces.

Furthermore, it generates the necessary files for deploying, running, and operating the application in your preferred cloud environment.


## Analysis

We did a research on which are the Pros and Cons of using this service. You can read the full analysis (here)[./ANALYSIS.md].


## Proof of Concept

We created a proof of concept to test the service. (here)[./klotho-go-example/README.md].


## Reference Documentation

- (Klotho Docks)[https://klo.dev/]
