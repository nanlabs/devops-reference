# Introducing Buildpacks

## Requirements

- [docker](https://www.docker.com/)
- [buildpacks' pack](https://github.com/buildpacks/pack)

## Quickstart

In order to package the app and build the OCI image as hello-buildpacks, run the following command

```sh
pack build hello-buildpacks --buildpack paketo-buildpacks/python \
  --builder paketobuildpacks/builder:base
```

Running the generated image

```sh
docker run --rm hello-buildpacks
```

### Files

- Procfile: defines how to run the app
- project.toml: settings for the environment (i.e. The Python's version)
- main.py: simple python app
- requirements.txt: as it is a python project, this file gets autodetected, installing the required dependencies

### Tools

Resulting image can be analyzed with [dive](https://github.com/wagoodman/dive)
