const express = require('express')
const cors = require('cors')
const http = require('http')
const routes = require('./src/api/routes/routes')

require('./src/database/indexDb.js')
 
server = express()
server.use(cors())

server.use(express.json())

server.use(routes)

server.set('porta', 3010)
server.set('url', 'http://localhost:')

http.createServer(server).listen(server.get('porta'), function() {
    console.log('Servidor rodando na porta ' + server.get('url') + server.get('porta'))
})


