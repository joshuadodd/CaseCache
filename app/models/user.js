module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('user', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        firstname: { type: Sequelize.STRING, notEmpty: true },
        lastname: { type: Sequelize.STRING, notEmpty: true },
        username: { type: Sequelize.TEXT },
        entry: { type: Sequelize.TEXT },
        email: { type: Sequelize.STRING, validate: { isEmail: true } },
        password: { type: Sequelize.STRING, allowNull: false },
        last_login: { type: Sequelize.DATE },
<<<<<<< HEAD
        status: { type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' }

    });

    return User;

=======
        status: { type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' },


    });

    return User;
>>>>>>> fbbc2e4f2c57717451b0ecb3ebe78a89800e026a

}