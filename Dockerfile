FROM node:alpine

WORKDIR /var/exercise/app

COPY . /var/exercise/app

RUN npm install

RUN npm prune --production

CMD ["npm", "start"]