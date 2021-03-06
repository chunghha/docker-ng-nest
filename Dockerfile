ARG NODE_VERSION=14

FROM node:${NODE_VERSION}-alpine AS builder

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
ENV HOST=0.0.0.0 APP_PORT=4600

EXPOSE ${APP_PORT}

ENTRYPOINT ["yarn"]
CMD ["run", "serve:ssr"]
