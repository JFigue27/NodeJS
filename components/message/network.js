const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.headers);
  res.header({
    'custom-header': 'Mi Valor Personalizado',
  });
  console.log(req.body);
  //   res.send('Lista de mensajes...');
  response.success(req, res, 'Lista de mensajes');
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

router.delete('/', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send(`Mensaje eliminado! --- ${req.body.text}`);
});

module.exports = router;
