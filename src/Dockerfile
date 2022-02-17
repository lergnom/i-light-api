FROM node:14-alpine as build
WORKDIR /opt/app
ADD *.json ./
RUN yarn add
ADD . .
RUN yarn run build i-light-api

