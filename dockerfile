FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 5173

CMD ["npm", "run", "dev"]