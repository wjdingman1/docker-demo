FROM nginx:stable-alpine

WORKDIR /usr/src/app

COPY . .

RUN apk add --no-cache nodejs npm
RUN npm ci
