FROM gitpod/workspace-full

USER root

RUN apt-get update \
 && apt-get install -y ruby-full \
 && apt-get clean && rm -rf /var/cache/apt/* /var/lib/apt/lists/* /tmp/* \

USER gitpod

RUN gem install bundler jekyll