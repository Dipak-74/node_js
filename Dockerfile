from node:22-alpine
workdir /app
copy package*.json ./
run npm install --omit=dev
copy . .
expose 3000
cmd ["node", "server.js"]
