# build
FROM node:lts-alpine as build
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm i

COPY ./ ./

RUN npm run build

# prod
FROM nginx:alpine as prod

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
