const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-52-23-45-36.compute-1.amazonaws.com',
        user: 'dhoieafqbyegsw',
        password: '4c85fdf3c25e1a567974f54d090106c2e51e89c6c910404851ff43de6d19954e',
        database: 'd3nlm6737c97vb',
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = knex;