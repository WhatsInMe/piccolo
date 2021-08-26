FROM node:current-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 80
CMD ["node", "./src/index.js"]