FROM node:18 AS build
WORKDIR /srv
ADD package.json .
RUN npm install

FROM node:18-slim
RUN apt-get update && apt-get install -y \
  curl \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/* && apt-get clean
COPY --from=build /srv .
ADD . .
EXPOSE 3000
CMD ["node_modules/.bin/mocha"]