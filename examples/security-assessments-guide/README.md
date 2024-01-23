## Readme

En esta guia se analizaran principalmente tres formas distintas a traves de las cuales podemos realizan un analisis de nuestro proyecto, con el objetivo de evitar posibles vulnerabilidades. Cada una de estas formas sera en un momento distintos de la etapa de desarrollo, con lo cual pretendemos se puedan adoptar segun la estrategia mas conveniente para cada proyecto y equipo.

Los puntos que se analizaran, seran:

1. Early stages of Development Workflows

- Integrar tools existentes con IDEs como VS Code e Intellij
- Git workflow:
  - pre-commit/pre-push con Snyk/Trivy
  - Linter configurations
  - Husky

2. Continous integration

- Como realizar los distintos tipos de analisis ya mencionados, en un flujo de CI/CD.
- Stack principal a analizar: Github actions.
- Stack extra: Gitlab CI/CD, AWS Code Pipeline, Jenkins, Bitbucket.
- Analisis de Github Enterprise - Github Security.

3. Scans

- Scan de Filesystem (codigo en repositorios)
- Infra as Code
- Kubernetes
- Seguridad en contenedores

# Readme

In this guide, we will primarily analyze three different ways through which we can make an analysis of our project with the goal of avoiding potential vulnerabilities. Each of these methods will be applicable at different stages of the development process, allowing them to be adopted based on the most suitable strategy for each project and team.

The points that will be analyzed include:

## 1. Early Stages of Development Workflows

- Integrate existing tools with IDEs such as VS Code and Intellij.
- Git workflow:
  - Pre-commit/Pre-push with Snyk/Trivy.
  - Linter configurations.
  - Husky configurations.

## 2. Continuous Integration

- How to perform differents types of analyses mentioned, in a CI/CD flow.
- Primary stack for analysis: Github Actions.
- Additional stacks: Gitlab CI/CD, AWS Code Pipeline, Jenkins, Bitbucket.
- Analysis of Github Enterprise - Github Security.

## 3. Scans

- Filesystem scan (code in repositories).
- Infra as Code.
- Kubernetes.
- Container Security.
