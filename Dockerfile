FROM node:16-alpine AS BUILD

WORKDIR /build

COPY ["package.json", "yarn.lock", "tsconfig.build.json", "tsconfig.json", "/build/"]
RUN yarn --frozen-lockfile

COPY ["src", "/build/src/"]

RUN yarn build

FROM node:16-alpine AS RUN

WORKDIR /reader

COPY --from=BUILD /build/dist /reader/dist
COPY ["package.json", "yarn.lock", "tsconfig.build.json", "tsconfig.json", "/reader/"]

RUN yarn --production
CMD ["yarn", "start"]
