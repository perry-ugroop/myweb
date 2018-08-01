FROM nginx:1.13.3
RUN apt-get update && apt-get install -y curl gnupg2
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential
RUN apt-get install -y git

WORKDIR /var/myweb
COPY assets ./assets
COPY .babelrc ./.babelrc
COPY config.js ./config.js
COPY index.js ./index.js
COPY lib ./lib
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY routes ./routes
COPY routes.js ./routes.js
COPY views ./views

RUN npm install

EXPOSE 4003
CMD npm run start

