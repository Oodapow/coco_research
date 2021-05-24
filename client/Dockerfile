FROM node:10-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
 
FROM nginx:1.17.1-alpine
COPY react.conf /etc/nginx/react.conf
COPY --from=build-step /app/build /usr/share/nginx/html/app
CMD [ "nginx", "-c", "/etc/nginx/react.conf" ]