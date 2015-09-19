FROM node:4
MAINTAINER Sean Macdonald <sean.macdonald@stjoseph.com>

RUN mkdir -p /usr/src/app
RUN mkdir -p /logz
COPY ./package.json /usr/src/
WORKDIR /usr/src/
RUN npm install -g pm2
RUN npm install
COPY . /usr/src/app
WORKDIR /usr/src/app

EXPOSE 10010
