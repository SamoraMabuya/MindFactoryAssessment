FROM node:current-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g sass

COPY . .


CMD ["npm", "run", "start"]
