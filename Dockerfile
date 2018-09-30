# Stage 1: Build Angular static assets
FROM node:10-alpine as node
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build:ssr
EXPOSE 4000
CMD ["npm", "run", "serve:ssr"]
