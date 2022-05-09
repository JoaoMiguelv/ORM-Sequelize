const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const categorias = require('../api/models/categoriasModels')
const departamentos = require('../api/models/departamentosModels')
const times = require('../api/models/timesModels')


const conexao = new Sequelize(dbConfig)

try{
    conexao.authenticate();
    console.log('Conexão estabelecida Mysql')
} catch (error) {
    console.log('Falha na conexão Mysql!!!')
}

categorias.init(conexao)
departamentos.init(conexao)
times.init(conexao)

module.exports = conexao;
