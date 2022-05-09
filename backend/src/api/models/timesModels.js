const { Model, DataTypes } = require('sequelize');

class Times extends Model {
    static init(sequelize) {
        super.init({
            tim_descricao: DataTypes.STRING,
            tim_apelido: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Times;