FROM node:alpine

WORKDIR /var/exercise/app

COPY . /var/exercise/app

# install dependencies
RUN npm install

# clean devDependencies
RUN npm prune --production

CMD ["npm", "start"]