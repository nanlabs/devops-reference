ARG GLUE_TAG=glue_libs_3.0.0_image_01

FROM amazon/aws-glue-libs:${GLUE_TAG}
# GLUE_TAG is specified again because the FROM directive resets ARGs
# (but their default value is retained if set previously)
ARG GLUE_TAG

USER root

COPY requirements.txt /requirements.txt

RUN pip3 install -U -r /requirements.txt

# TODO: This is a temporary hack to solve the issue with the VSCode permissions.
#       This should be removed once the issue is resolved.
RUN chmod -R 777 /tmp/spark-events && usermod -u 1000 glue_user

# Return to original base image's user
USER glue_user
