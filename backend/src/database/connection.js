const Knex = require('knex');
const configuration = require('../../knexfile');

const connection = Knex(configuration.development);

module.exports = connection;