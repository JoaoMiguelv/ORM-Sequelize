const { Model, DataTypes } = require('sequelize');

class Departamentos extends Model {
    static init(sequelize) {
        super.init({
            dep_descricao: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Departamentos;

