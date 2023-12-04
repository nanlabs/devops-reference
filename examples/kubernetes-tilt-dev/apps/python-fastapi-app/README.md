# FastAPI Example 🚀

## Requirements 🛠️

To get started, make sure you have the following tools installed on your machine:

- Docker 🐳
- Docker Compose 🐳
- Python 🐍

  **Python Version:** You'll need Python 3.12 installed on your local development machine. You can use [pyenv](https://github.com/pyenv/pyenv) to easily switch Python versions between different projects. If you're on Windows, consider using [pyenv-win](https://github.com/pyenv-win/pyenv-win).

  ```sh
  pyenv install
  pyenv local
  ```

### Gotchas for Certain Environments 🧐

Depending on your development environment, you may also need to create and activate a virtual environment for Python. Follow these steps:

```sh
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.dev.txt
```

For Windows users using WSL2, ensure you have Docker Desktop installed, running, and configured with a [WSL2 connection](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers).

## Setup the Development Environment 🛠️

- Install the project dependencies:

  ```sh
  pip install -r requirements.dev.txt
  ```

- Install pre-commit hooks:

  ```sh
  pre-commit install
  ```

## Running the App 🏃‍♀️🏃‍♂️

To launch the app, simply run:

```sh
cp .env.example .env # Then Edit .env file with your own values
docker-compose up
```

Your app will be up and running in no time! 🚀🎉

This will start the following services:

- `web`: FastAPI server running at [http://localhost:80](http://localhost:80)
