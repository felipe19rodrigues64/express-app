FROM node:latest

MAINTAINER Mike Polinowski

#ENV NODE_ENV=production
#ENV NODE_ENV=dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}


ENV PORT=3000

COPY . /app
WORKDIR /app

RUN npm install
RUN npm install http-errors --save
RUN npm install serve-favicon --save
RUN npm install nodemon -g
RUN npm audit fix

EXPOSE $PORT
ENTRYPOINT ["npm", "start"]