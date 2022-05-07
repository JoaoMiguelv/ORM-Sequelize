const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const categoriasControllers = require('../controllers/categoriasControllers.js')

// rota raiz
routes.get('/', controllers.indexRaiz)

// rota de categorias
routes.get('/categorias', categoriasControllers.index)
routes.post('/categorias', categoriasControllers.store)

module.exports = routes

