// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

var PORT = 3000 || process.env.PORT
server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
  console.log('JSON Server is running')
})