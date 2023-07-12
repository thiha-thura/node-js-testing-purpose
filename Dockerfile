# cook your dish here
FROM node
WORKDIR /app
COPY . .
RUN npm init -y
RUN npm install express 
CMD ["node" , "server.js"]
