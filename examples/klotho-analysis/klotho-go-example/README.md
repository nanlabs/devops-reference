# Simple Klotho app

## Install Klotho

### Installation guide

Check the documentation according your OS: [LINK HERE](https://klo.dev/docs/download-klotho)

### Docker image

Check this [link](https://hub.docker.com/r/klothoplatform/klotho) to get the latest docker image.

## Run Server

```bash
go run main.go
```

```bash
curl "localhost:3000/hello"
# -> Hello from Klotho!

curl "localhost:3000/hello/your-name"
# -> Hello your-name!
```

## Compile with Klotho

### Login with the Klotho's cli

If you haven't already login, run the following command:

```bash
klotho --login
```

### Get the cloud native version of the application

E.G.

```bash
klotho . --app my-first-app --provider aws --outDir _compiled
```

This will generate `/_compiled` directory

### Visualize the cloud version

Open the `./_compiled/my-first-app.png` diagram created alongside the cloud application:

![Klotho's compiled workflow](./_compiled/my-first-app.png)
