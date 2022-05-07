const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const categorias = require('../api/models/categoriasModels')

const conexao = new Sequelize(dbConfig)

try{
    conexao.authenticate();
    console.log('Conexão estabelecida Mysql')
} catch (error) {
    console.log('Falha na conexão Mysql!!!')
}

categorias.init(conexao)

module.exports = conexao;
