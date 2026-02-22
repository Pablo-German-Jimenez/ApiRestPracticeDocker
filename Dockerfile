# -1 Imagen base con Node
FROM node:18-alpine

# -2. Directorio de trabajo dentro  del contenedor
WORKDIR /app

# 3. Copiamos package.json y package-lock.json
COPY package*.json ./

# 4 . Instalamos dependencias
RUN npm install

# 5 . Copiamos el resto del código

COPY . .

# 6 . Exponemos el puerto (documentación)
EXPOSE 3000

# 7 . Comando para iniciar la ap
CMD ["npm","start"]
