FROM node:lts-slim AS base

WORKDIR /usr/src/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run test -- --watchAll=false
RUN npm run build

# Start from a clean node image we don't want to package up node modules
FROM node:lts-slim AS final

# Copy the build files
COPY --from=base ./usr/src/build/ .
RUN npm install -g serve
EXPOSE 5000

CMD [ "serve", "-s"]