#FROM debian:name-slim
FROM node:latest as build
RUN mkdir -p /var/www/app
WORKDIR /var/www/app
#ENV PATH /var/www/node_modules/.bin:$PATH
COPY .. ./

RUN npm install
#RUN npm run build

EXPOSE 80
#CMD ["daemon off;"]
