const models = require('../models');


const findOne = () => {}

const findAll = model => models[model].findAll()

const updateOne = () => {}

const create = (model, body) => models[model].create(body);

module.exports = {
  findOne,
  findAll,
  updateOne,
  create
}