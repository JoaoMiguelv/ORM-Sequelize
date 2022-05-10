const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const categoriasControllers = require('../controllers/categoriasControllers.js')
const departamentosControllers = require('../controllers/departamentosControllers.js')
const timesControllers = require('../controllers/timesControllers.js')

// rota raiz
routes.get('/', controllers.indexRaiz)

// rotas de categorias
routes.get('/categorias', categoriasControllers.index)
routes.post('/categorias', categoriasControllers.store)
routes.put('/categorias/:codigo_id', categoriasControllers.update)
routes.delete('/categorias/:codigo_id', categoriasControllers.delete)
routes.get('/categorias/:codigo_id', categoriasControllers.indexId)

// rotas de departamentos
routes.get('/departamentos', departamentosControllers.index)
routes.post('/departamentos', departamentosControllers.store)
routes.put('/departamentos/:codigo_id', departamentosControllers.update)

// rotas de times
routes.get('/times', timesControllers.index)
routes.post('/times', timesControllers.store)
routes.put('/times/:codigo_id', timesControllers.update)
routes.delete('/times/:codigo_id', timesControllers.delete)

module.exports = routes

