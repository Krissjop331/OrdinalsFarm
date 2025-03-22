
FROM node:22

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm cache clean --force && npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем проект
RUN npx prisma generate
RUN npm run build

# Указываем порт, который будет использоваться приложением
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]