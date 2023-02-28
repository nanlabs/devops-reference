FROM openjdk:8-jre-alpine

ENV GREMLIN_VERSION 3.4.8

RUN set -ex \
    && apk add --no-cache --virtual .build-deps wget unzip \
    && apk add --no-cache bash dumb-init \
    && wget https://archive.apache.org/dist/tinkerpop/${GREMLIN_VERSION}/apache-tinkerpop-gremlin-server-${GREMLIN_VERSION}-bin.zip -O gremlin.zip \
    && unzip gremlin.zip \
    && rm gremlin.zip \
    && mv apache-tinkerpop-gremlin-server-${GREMLIN_VERSION} gremlin \
    && apk del .build-deps

COPY config /gremlin

WORKDIR /gremlin
EXPOSE 8182

ENTRYPOINT ["dumb-init", "--rewrite", "15:2",  "--"]
CMD ["bin/gremlin-server.sh","gremlin-server.yaml"]

