FROM ruby:2.6.5-alpine
ENV LANG C.UTF-8

# system update
RUN apk update && apk upgrade
# build-essential
RUN apk add --update-cache --no-cache \
  build-base \
  curl-dev \
  linux-headers \
  libxml2-dev \
  libxslt-dev \
  ruby-dev \
  yaml-dev \
  zlib-dev
# basic commands
RUN apk add --update-cache --no-cache \
  bash \
  git \
  openssh \
  ruby-json \
  tzdata \
  yaml
# .gemrc
RUN echo 'gem: --no-document' >> ~/.gemrc && \
  cp ~/.gemrc /etc/gemrc
# rails ready
RUN apk add --update-cache tzdata sqlite sqlite-dev

WORKDIR /app
COPY . .
RUN bundle
RUN chmod +x startup.sh

CMD ["./startup.sh"]