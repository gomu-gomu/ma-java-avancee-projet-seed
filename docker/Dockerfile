FROM node:latest

WORKDIR /usr/src/app
RUN corepack enable

COPY package.json ./
RUN pnpm install

COPY . .
CMD ["bash"]