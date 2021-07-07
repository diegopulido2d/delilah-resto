const Sequelize = require('sequelize');

const path = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.PORT}/${process.env.DB_NAME}`;
const sequelize = new Sequelize(path, {logging: false});


sequelize.authenticate().then(() => {
    console.log('Connection to database succesful!');
}).catch(err => {
    console.error('Error', err);
});

module.exports = sequelize;