FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

CMD exec yarn run dev &
