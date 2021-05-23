FROM node:10-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
 
FROM node:10-alpine
RUN npm install -g serve
COPY --from=build-step /app/build /app/build
WORKDIR /app
CMD ["serve", "-s", "build"]
