FROM node:18

WORKDIR /HomeWorkCICD

COPY . .

WORKDIR /HomeWorkCICD/frontend
RUN npm i 
RUN npm run build

WORKDIR /HomeWorkCICD/backend
RUN npm i 


EXPOSE 3005

CMD ["node", "app.js"]