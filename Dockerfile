FROM node:lts

WORKDIR /usr/app

COPY . /usr/app/
COPY package.json /usr/app/
COPY pnpm-lock.yaml /usr/app/
COPY tsconfig.json /usr/app/

RUN npm install tsc -g
RUN npm install pnpm -g
RUN pnpm i
RUN pnpm run build

COPY . .

CMD ["node", "dist/src/main.js"]
EXPOSE 3036