ARG GLUE_TAG=glue_libs_3.0.0_image_01

FROM amazon/aws-glue-libs:${GLUE_TAG}
# MSSQL_TAG is specified again because the FROM directive resets ARGs
# (but their default value is retained if set previously)
ARG GLUE_TAG

USER root

COPY requirements.txt /requirements.txt

RUN pip3 install -U -r /requirements.txt

# Return to original base image's user
USER glue_user
