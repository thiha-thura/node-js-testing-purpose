FROM node
WORKDIR /app/
RUN npm init -y
RUN npm install express
CMD [node , server.js]
