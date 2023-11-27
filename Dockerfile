FROM fabiocicerchia/nginx-lua:1.23.4-alpine3.17.3-compat
FROM node:latest

# set working directory
RUN mkdir /baseroute
WORKDIR /baseroute

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUn npm install react@^16.8.0 @mui/material @emotion/react @emotion/styled
RUN echo $ENV

# add app
COPY . ./

# start app
CMD ["npm", "run", "dev"]