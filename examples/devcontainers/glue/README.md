# AWS Glue libs Using VSCode + Remote Containers

1. Install Docker
2. Install [VSCode](https://code.visualstudio.com/)
3. Install the [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extension
4. Clone this repository
5. Create your application within a container (see gif below)

![Create application within a container](./docs/vscode-open-in-container.gif)

after the container is running inside VSCode, you can try to run the jobs locally.

In the following gif we execute the following commands:

```sh
pip3 install -U .
pip3 install -U -r requirements.txt
su glue_user
$ glue-spark-submit src/jobs/pyspark.py --JOB_NAME job_example --CUSTOM_ARGUMENT custom_value
```
