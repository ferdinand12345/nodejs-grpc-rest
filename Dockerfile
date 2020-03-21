# Set OS
FROM debian:jessie

# Install Required Packages
RUN apt-get update && apt-get install -y \
  build-essential autoconf libtool \
  git \
  nano \
  pkg-config \
  libgflags-dev \
  libgoogle-glog-dev \
  liblmdb-dev \
  curl software-properties-common \ 
  && apt-get clean
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs

# GRPC
RUN git clone -b v1.2.5 https://github.com/grpc/grpc /var/local/git/grpc
RUN cd /var/local/git/grpc && \
    git submodule update --init && \
    make grpc_cli
ENV PATH /var/local/git/grpc/bins/opt:$PATH

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app

# Install required packages
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Setup port
EXPOSE 3000

# Running command
CMD [ "node", "server.js" ]
