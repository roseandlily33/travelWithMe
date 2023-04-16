const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_Library,
    process.env.DB_User,
    process.env.DB_Password,{
        host:'localhost',
        dialect: 'mysql',
        port: 3006
    }
)
module.exports = sequelize;