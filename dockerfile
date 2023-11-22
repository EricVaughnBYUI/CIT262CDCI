FROM node:16-alpine

WORKDIR /usr/app

COPY package.json /usr/app

COPY server.cjs /usr/app

RUN npm install

EXPOSE 3000

CMD ["node", "server.cjs"]