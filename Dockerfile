# Sử dụng image node với phiên bản 22.5.1
FROM node:22.5.1-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json (nếu có) vào container
COPY package*.json ./

# Cài đặt các package cần thiết
# RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng
RUN npm run build

# Cài đặt một server tĩnh để phục vụ ứng dụng (ví dụ như serve)
RUN npm install -g serve

# Port mà ứng dụng sẽ chạy
EXPOSE 3000

# Lệnh để chạy ứng dụng khi container khởi động
CMD ["serve", "-s", "build", "-l", "3000"]
