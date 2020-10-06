const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const response = require('./network/response');

var app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) => {
  console.log(req.headers);
  res.header({
    'custom-header': 'Mi Valor Personalizado',
  });
  console.log(req.body);
  //   res.send('Lista de mensajes...');
  response.success(req, res, 'Lista de mensajes');
});

router.post('/message', (req, res) => {
  if (req.query.error == 'ok') {
    response.error(req, res, 'Error Simulado', 400);
  } else {
    response.success(req, res, 'Creado correctamente!!!', 201);
  }
});

router.delete('/message', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send(`Mensaje eliminado! --- ${req.body.text}`);
});

// app.use('/', (req, res) => {
//   res.send('Hola');
// });
app.listen(3000);

console.log(`Listening http://localhost:3000`);
