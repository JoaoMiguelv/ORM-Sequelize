const Categorias = require('../models/categoriasModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const categorias = await Categorias.findAll();
        return resposta.json(categorias);
    },

    async store(req, res) {
       const categoria = await Categorias.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    }
}


