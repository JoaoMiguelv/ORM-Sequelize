const Categorias = require('../models/categoriasModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const categorias = await Categorias.findAll();
        return resposta.json(categorias);
    },

    async store(req, res) {
       const categoria = await Categorias.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params;
        const { cat_descricao } = req.body;

        await Categorias.update({
            cat_descricao
        }, {
            where: {id: codigo_id}
        })
        return res.json({message: "Registro atualizado com sucesso!"})
    },

    async delete(req, res) {
        const { codigo_id } = req.params;
        await Categorias.destroy({
            where: {id: codigo_id}
        });
        return res.status(200).send({
            status: 1,
            message: "Categoria deletada!"
        });
    },

    async indexId(req, res) {
        const { codigo_id } = req.params;
        const categoria = await Categorias.findByPk(codigo_id);

        return res.json(categoria);
    }

}


