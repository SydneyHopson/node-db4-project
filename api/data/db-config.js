const knex = require('knex')
const configuration = require('../knexfile')
const environment = process.env.NODE_ENV 

module.exports = knex(configuration[environment])