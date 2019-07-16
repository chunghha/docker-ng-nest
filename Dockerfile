ARG NODE_VERSION=12

FROM node:${NODE_VERSION}-alpine AS builder
RUN npm -g i yarn

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Install app dependencies
COPY --chown=node package.json ./
COPY --chown=node yarn.lock ./
RUN yarn

# Bundle app source code
COPY --chown=node . .
RUN yarn build:ssr

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=4000

EXPOSE ${PORT}

ENTRYPOINT ["yarn"]
CMD ["run", "serve:ssr"]
