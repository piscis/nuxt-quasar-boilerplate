FROM node:20
RUN npm install -g pnpm

# App Setup
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY .output .output

# Install Dependncies
RUN pnpm install --shamefully-hoist

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV production

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]