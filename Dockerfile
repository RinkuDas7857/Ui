FROM node:16-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM deps AS builder
ARG BUILD_ENV
# ARG BUILD_ENV=production / test
ENV BUILD_ENV $BUILD_ENV
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN if [ "$BUILD_ENV" = "test" ]; then yarn build:pub-testnet; else yarn build; fi

FROM nginx
RUN mkdir /app
COPY --from=builder /app/deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /app/ref-ui

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]