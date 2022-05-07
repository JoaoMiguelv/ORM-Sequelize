const { Model, DataTypes } = require('sequelize');

class Categorias extends Model {
    static init(sequelize) {
        super.init({
            cat_descricao: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Categorias;

