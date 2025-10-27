FROM node:22-slim AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

# Runtime
FROM nginx:trixie AS runtime

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
