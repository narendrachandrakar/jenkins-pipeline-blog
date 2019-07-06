FROM node:lts-slim
WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
EXPOSE 4000
CMD yarn start
