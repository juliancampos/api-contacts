const repository = require('../../database/repository');

const getUser = async (req, resp) => {
  try {
    const result = await repository.findAll('user');
    resp.status(200).send(result)
  } catch (error) {
    resp.status(500).send(error)
  }
}

const postUser = async (req, resp) => {
  try {
    const result = await repository.create('user', req.body);
    resp.status(200).send(result)
  } catch (error) {
    resp.status(500).send(error);    
  }
}


module.exports = {
  getUser,
  postUser
}