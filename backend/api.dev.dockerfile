FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn add @prisma/client --save-dev

RUN npx prisma generate
RUN npx prisma migrate dev

EXPOSE 3000

CMD ["yarn", "dev"]
