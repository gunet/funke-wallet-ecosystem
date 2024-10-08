# Builder stage
FROM ghcr.io/gunet/funke-wallet-enterprise:base AS builder
WORKDIR /app


COPY funke-wallet-enterprise/ .
RUN rm -rf /app/src/configuration/
COPY ./wallet-enterprise-configurations/acme-verifier/src/configuration/ /app/src/configuration/
COPY ./wallet-enterprise-configurations/acme-verifier/views/index.pug /app/views/index.pug
COPY ./wallet-enterprise-configurations/acme-verifier/views/header.pug /app/views/header.pug
COPY ./wallet-enterprise-configurations/acme-verifier/views/verifier/public_definitions.pug /app/views/verifier/public_definitions.pug
COPY ./wallet-enterprise-configurations/acme-verifier/views/verifier/QR.pug /app/views/verifier/QR.pug
COPY ./wallet-enterprise-configurations/acme-verifier/views/verifier/success.pug /app/views/verifier/success.pug
COPY ./wallet-enterprise-configurations/acme-verifier/public/styles/styles.css /app/public/styles/styles.css
COPY ./wallet-enterprise-configurations/acme-verifier/public/images /app/public/images

RUN --mount=type=secret,id=npmrc,required=true,target=./.npmrc,uid=1000 \
    yarn cache clean && yarn install && yarn build

# Production stage
FROM node:20-bullseye-slim AS production
WORKDIR /app

COPY --from=builder /app/auth0-mdl-v0.3.0-wwwallet-build-1722929256.tgz .
COPY --from=builder /app/package.json .
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/views/ ./views/


RUN --mount=type=secret,id=npmrc,required=true,target=./.npmrc,uid=1000 \
    yarn cache clean && yarn install --production


ENV NODE_ENV production
EXPOSE 8003

CMD ["node", "./dist/src/app.js"]