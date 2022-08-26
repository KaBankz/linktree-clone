FROM node:18.6.0-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY pnpm-lock.yaml .

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "dev", "--host"]
