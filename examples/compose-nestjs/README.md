# Compose Nestjs Example

This repository provides an example of initializing a Nestjs project using docker-compose.

## Requirements

Make sure you have the following dependencies installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Quickstart

To quickly get started, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/nanlabs/devops-reference.git
   cd devops-reference/examples/compose-nestjs
   ```

2. Start the development environment:

   ```sh
   docker-compose up
   ```

This will start the necessary containers and set up the Nestjs project.

## Production Testing

If you want to test the project in a production environment, use the following command:

```sh
docker compose -f compose.prod.yml up
```

This will run the project with additional configurations suitable for production.

## Development Experience

To enhance your development experience, it is recommended to use Visual Studio Code (VSCode) along with the Docker container. Here's how you can set it up:

1. Make sure your Docker container is running.

2. Install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VSCode.

3. In VSCode, go to Command Palette (F1) -> Dev Containers: Attach to Running Container... > [docker container]

4. In the new VSCode window, open the directory `/usr/src/app`, which contains the project code inside the Docker container.

Now you have a terminal inside the container, allowing you to install new dependencies and work within the development environment seamlessly.
