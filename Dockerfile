FROM node:18

WORKDIR /ro-wsproxy

# COPY package*.json ./
# COPY . .
RUN npm install wsproxy -g

# CMD [ "node", "index.mjs" ]