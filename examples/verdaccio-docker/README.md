## Verdaccio Docker Example

This is an example of how to use [Verdaccio](https://verdaccio.org/) and Docker for local package management. Verdaccio provides an npm package that can be installed globally as a dependency. However, in this example, Docker is used to run the server. This approach is beneficial if you wish to run the server in a container and use it as a proxy to npmjs.com. This example also demonstrates how to publish and unpublish a package to the Verdaccio server.

In this example, a folder named `verdaccio` is created, and it contains the configuration files and storage folder.

- Navigate to the directory containing the `docker-compose.yaml` file and run the command `docker-compose up` to start the container. On a Macbook/Windows, install and use Docker-Desktop app. You can right click on the file and select `Compose up` from the context menu.
- Run `docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio` or open Docker Desktop.
- The URL to access the Verdaccio server will be [http://localhost:4873](http://localhost:4873). You can change the port number in the `docker-compose.yaml` file.
- In this example, we are allowing all users to publish and unpublish packages. To change this, edit the `verdaccio/config.yaml` file and set `publish: access`, `publish: publish`, or `publish: unpublish`. Then use `npm adduser --registry http://localhost:4873/` to add a user.
- Build the library by running `npm run build`.
- Check in `package.json` if the `publishConfig` field exists. If it does, remove (or comment) it temporarily. This field is used to publish to npmjs.com and will override the registry URL.
- Check the `private` field in `package.json` and temporarily set it to false.
- Also, ensure to check the package version. It should not match any existing version on your Verdaccio server or your proxy (e.g., 1.0.0). If you need to build and publish again due to changes made to the library, you should either increment the version number or unpublish the existing package first.

- To publish the library, ensure that the "private" field in `package.json` is set to `false` and that the Verdaccio server is running. Then, run `npm publish --registry http://localhost:4873`. Please note that the package will be published to the Verdaccio server, so it's important to verify that the "storage" folder exists. If you need to change the storage location, you can edit the `storage` field in the `verdaccio/config.yaml` file.
- To unpublish, run `npm unpublish ${package_name} --registry http://localhost:4873 --force`.

## Usage

- Run `npm install ${package_name}@latest --registry http://localhost:4873` within the app that will use the library. `@latest` could be replaced by a specific version.

## Recommendations

- Set the environment variable in the terminal `export VERDACCIO_URL=http://localhost:4873` to avoid having to type `--registry http://localhost:4873` every time you run a command.
- You can create a script to run the publish and unpublish methods.
- The proxy could be used to set your company's proxy. But you can also remove the proxy and use npmjs.com directly.
- `max_body_size` in the Verdaccio config file can be used to set the maximum size of the package.
- You can take advantage of middleware and logs to monitor the package.
