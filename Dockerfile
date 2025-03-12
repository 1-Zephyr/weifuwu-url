# 第 1 阶段：使用 node 构建前端
FROM node:18-alpine AS frontend-builder
WORKDIR /code
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
RUN npm run build

# 第 2 阶段：使用 nginx 作为 Web 服务器
FROM nginx:latest
EXPOSE 80
# 替换 nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 复制构建后的文件到 nginx
COPY --from=frontend-builder /build-app/dist /usr/share/nginx/html
# 运行 Nginx
CMD ["nginx", "-g", "daemon off;"]
