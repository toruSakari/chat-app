FROM node:lts-slim as nodejs
FROM oven/bun:latest

COPY --from=nodejs /usr/local/bin /usr/local/bin

COPY --from=nodejs /usr/local/lib/node_modules /usr/local/lib/node_modules

WORKDIR /client/app/

COPY ./app/package.json ./

RUN bun install
