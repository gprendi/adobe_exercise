FROM node:alpine

WORKDIR /var/exercise/app

COPY . /var/exercise/app

# remove copied node_modules
RUN rm -r node_modules

# install dependencies
RUN npm install

# clean devDependencies
RUN npm prune --production

CMD ["npm", "start"]