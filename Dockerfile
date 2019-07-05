FROM node:8

COPY [".", "/usr/src/backend"]

WORKDIR /usr/src/backend

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
