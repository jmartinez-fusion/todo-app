# Usar la imagen base de node
FROM node:18-alpine

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir el proyecto
RUN npm run build

# Exponer el puerto de la aplicación
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]

