const express = require('express');

var app = express();

app.use('/', (req, res) => {
  res.send('Hola');
});
app.listen(3000);

console.log(`Listening http://localhost:3000`);
