FROM node:18

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

# Instalando o pnpm globalmente
RUN npm install -g pnpm

# Instalando as dependências usando pnpm
RUN pnpm install

COPY . .

EXPOSE 8080

CMD ["pnpm", "dev"]
