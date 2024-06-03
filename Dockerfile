FROM node:18

WORKDIR /ro-wsproxy

# COPY package*.json ./
COPY . .


CMD [ "node", "index.js" ]