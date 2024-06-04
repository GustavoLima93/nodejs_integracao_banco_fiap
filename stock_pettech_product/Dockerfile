
# Use a imagem oficial do Node.js para a fase de construção

FROM node:18-alpine

  

# Crie o diretório de trabalho no contêiner

WORKDIR /usr/app

  

COPY package.json ./

  

RUN npm install

  

COPY . .

  

RUN npm install -g pnpm

  

# Compilação do código TypeScript

RUN pnpm build

  

# Expõe a porta utilizada pelo seu aplicativo Nest.js (por padrão, é a porta 3000)

EXPOSE 3010

  

# Comando para iniciar o aplicativo quando o contêiner for iniciado

CMD ["node", "dist/main"]
