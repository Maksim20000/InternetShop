const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // Название бд
    process.env.DB_USER, // пользователь
    process.env.DB_PASSWORD, // парорль
    {
        dialect: 'postgres', // или my sql или друшшая СУБД
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)