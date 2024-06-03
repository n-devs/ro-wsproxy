FROM node:18

WORKDIR /ro-wsproxy

COPY package*.json ./
COPY index.js ./


CMD [ "node", "index.js" ]