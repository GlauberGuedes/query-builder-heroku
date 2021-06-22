const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '180694gf',
        database: 'market_cubos'
    }
});

module.exports = knex;