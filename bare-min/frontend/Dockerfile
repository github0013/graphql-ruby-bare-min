FROM node:13.1-alpine
ENV LANG C.UTF-8
WORKDIR /app
copy . .
RUN yarn

CMD ["yarn", "dev"]