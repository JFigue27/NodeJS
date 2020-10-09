const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  controller
    .getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected Error', 500, e);
    });
});

router.post('/', (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(req, res, 'Informacion invalida', 400, 'Error en el controlodos');
    });
});

router.patch('/:id', (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      res.error(req, res, 'Error interno', 500, e);
    });
});

router.delete('/', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send(`Mensaje eliminado! --- ${req.body.text}`);
});

module.exports = router;
