FROM openjdk:8u212-jdk-alpine

ENV DRIVER_URL https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar
ENV APP_URL https://github.com/schemaspy/schemaspy/releases/download/v6.1.0/schemaspy-6.1.0.jar

WORKDIR /app

RUN apk --update add graphviz ttf-dejavu && \
  apk --update add --virtual .builddep tzdata wget libressl && \
  cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
  wget -O schemaspy.jar ${APP_URL} && \
  apk del .builddep && \
  rm -rf /var/cache/apk/*
