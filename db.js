const {createPool} = require('mysql2/promise')

const pool=createPool({
    host:'localhost',
    user:'root',
    password:'andres2001',
    port: 3306,
    database: 'userdb'
})

module.exports = pool