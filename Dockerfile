FROM node:lts-alpine as build-stage
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install --unsafe-perm
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]