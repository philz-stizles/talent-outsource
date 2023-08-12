FROM node:alpine

WORKDIR /app

COPY package.json .

# --omit=dev means do not install devDependencies
RUN npm install --omit=dev

COPY . ./

CMD [ "npm", "start" ]
