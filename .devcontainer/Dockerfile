FROM ruby:2.7.3-alpine3.13

RUN apk update \
    && apk add bash gcc g++ git gnupg libc-dev make openssh

ARG UID=1000
ARG GID=1000

RUN addgroup -g $GID jekyll \
    && adduser --disabled-password -u $UID -G jekyll jekyll

USER jekyll

RUN gem install bundler:2.2.16