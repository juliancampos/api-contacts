const { findAll } = require('../../database/repository');

const getContact = async (req, resp) => {
  const result = await findAll();
  resp.status(200).send(result)
}

const postContact = (req, resp) => {
  resp.status(200).send('post contact')
}


module.exports = {
  getContact,
  postContact
}