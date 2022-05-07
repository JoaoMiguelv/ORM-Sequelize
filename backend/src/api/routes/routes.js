const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const categoriasControllers = require('../controllers/categoriasControllers.js')
const departamentosControllers = require('../controllers/departamentosControllers.js')

// rota raiz
routes.get('/', controllers.indexRaiz)

// rotas de categorias
routes.get('/categorias', categoriasControllers.index)
routes.post('/categorias', categoriasControllers.store)
routes.put('/categorias/:codigo_id', categoriasControllers.update)

// rotas de departamentos
routes.get('/departamentos', departamentosControllers.index)
routes.post('/departamentos', departamentosControllers.store)
routes.put('/departamentos/:codigo_id', departamentosControllers.update)

module.exports = routes

