# Bash script as a wrapper utility

## Requirements

- [docker](https://www.docker.com/)
- [When to use shell](https://google.github.io/styleguide/shellguide.html#when-to-use-shell)

## Quickstart

The control script is called ctl. you can get usage instructions by running the following command

```sh
cp .env.example .env
./ctl --help
```

## Samples

### Running basic mongo

```sh
./ctl [-c up]
```

### Running basic mongo with express and detach output

```sh
./ctl -e [-c up] --detach
```

### Stop containers (including express)

```sh
./ctl -e -c down
```
