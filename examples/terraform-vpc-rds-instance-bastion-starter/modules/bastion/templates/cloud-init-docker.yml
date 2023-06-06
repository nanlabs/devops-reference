#cloud-config

apt:
  sources:
    docker.list:
      source: deb [arch=amd64] https://download.docker.com/linux/ubuntu $RELEASE stable
      keyid: 9DC858229FC7DD38854AE2D88D81803C0EBFCD88

package_update: true

package_upgrade: true

packages:
  - apt-transport-https
  - ca-certificates
  - curl
  - gnupg-agent
  - software-properties-common
  - docker-ce
  - docker-ce-cli
  - containerd.io
  - amazon-ecr-credential-helper
  - awscli

# Enable ipv4 forwarding, required on CIS hardened machines
write_files:
  - path: /etc/sysctl.d/enabled_ipv4_forwarding.conf
    content: |
      net.ipv4.conf.all.forwarding=1
  - path: /etc/ssh/sshd_config
    append: true
    content: |
      ClientAliveInterval 600
      ClientAliveCountMax 0
  - path: /opt/aws/amazon-cloudwatch-agent/bin/config.json
    content: |
      {
          "agent": {
              "metrics_collection_interval": 60,
              "run_as_user": "cwagent"
          },
          "logs": {
              "logs_collected": {
                  "files": {
                      "collect_list": [
                          {
                              "file_path": "/var/log/cloud-init-output.log",
                              "log_group_name": "cloud-init",
                              "log_stream_name": "{instance_id}"
                          }
                      ]
                  }
              }
          },
          "metrics": {
              "append_dimensions": {
                  "AutoScalingGroupName": "$${aws:AutoScalingGroupName}",
                  "ImageId": "$${aws:ImageId}",
                  "InstanceId": "$${aws:InstanceId}",
                  "InstanceType": "$${aws:InstanceType}"
              },
              "metrics_collected": {
                  "disk": {
                      "measurement": [
                          "used_percent"
                      ],
                      "metrics_collection_interval": 60,
                      "resources": [
                          "*"
                      ]
                  },
                  "mem": {
                      "measurement": [
                          "mem_used_percent"
                      ],
                      "metrics_collection_interval": 60
                  }
              }
          }
      }

# create the docker group
groups:
  - docker

# Add default auto created user to docker group
system_info:
  default_user:
    groups: [docker]

runcmd:
  - curl -o amazon-cloudwatch-agent.deb https://s3.amazonaws.com/amazoncloudwatch-agent/ubuntu/amd64/latest/amazon-cloudwatch-agent.deb
  - dpkg -i -E amazon-cloudwatch-agent.deb
  - rm -f amazon-cloudwatch-agent.deb
  - chmod 644 /var/log/cloud-init-output.log
  - /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/opt/aws/amazon-cloudwatch-agent/bin/config.json
