# 🌐 Verdaccio with Docker Compose Example 🐳

This example demonstrates how to set up a private npm registry using Verdaccio and Docker Compose.

## Why Choose Verdaccio? 🤔

Verdaccio is a lightweight, easy-to-use, private npm registry. It's perfect for:

- 🛠️ **Local Package Management**: Manage npm packages locally with ease.
- 🚀 **Speed and Efficiency**: Speed up your development by caching npm packages and reducing reliance on external networks.
- 🛡️ **Control and Security**: Keep your private packages secure and share them within your team or organization.
- 🔄 **Continuous Integration Support**: Integrates smoothly into your CI/CD pipeline.

## Getting Started with Verdaccio and Docker 🚀

### Prerequisites

- Docker installed on your system (Docker Desktop for Mac/Windows).
- Docker Compose installed on your system (included with Docker Desktop).

### Setup and Launch 🛠️

1. **Create a Verdaccio Folder**: Set up a folder named `verdaccio` for configuration files and storage.

2. **Start Docker Container**: Navigate to the directory containing `compose.yaml` and run:

   ```bash
   docker-compose up
   ```

   Or use Docker Desktop's right-click context menu and select `Compose up`.

3. **Access Verdaccio Server**: Open [http://localhost:4873](http://localhost:4873) in your browser. Customize the port in `compose.yaml` if needed.

### Configuration ⚙️

- **User Permissions**: By default, all users can publish/unpublish packages. Edit `verdaccio/config.yaml` for specific permissions.
- **Set Up User Account**: Run `npm adduser --registry http://localhost:4873/` to add a user account.

### Publishing Packages 📦

1. **Prepare Your Package**:

   - Run `npm run build`.
   - In `package.json`, temporarily remove or comment out the `publishConfig` field.
   - Ensure `private` field is set to `false`.
   - Verify package version is unique to your Verdaccio server.

2. **Publish**:
   - Run `npm publish --registry http://localhost:4873`.

### Unpublishing Packages 🗑️

- To remove a package, execute:

  ```bash
  npm unpublish ${package_name} --registry http://localhost:4873 --force
  ```

## Usage in Projects 📚

- Install packages with:

  ```bash
  npm install ${package_name}@latest --registry http://localhost:4873
  ```

  Replace `@latest` with a specific version if needed.

## Pro Tips 🌟

- **Set Environment Variable**: Use `export VERDACCIO_URL=http://localhost:4873` for convenience.
- **Automation Scripts**: Create scripts for publishing and unpublishing.
- **Proxy Settings**: Configure the proxy in Verdaccio for external or internal use.
- **Package Size Limit**: Adjust `max_body_size` in the Verdaccio config for package size limits.
- **Middleware and Logs**: Leverage these for monitoring and tracking.
