const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

// const router = require('./components/message/network');
const router = require('./network/routers');

db('mongodb+srv://db_user:****@cluster0.wuwpz.mongodb.net/db_telegrom');

var app = express();
app.use(bodyParser.json());
// app.use(router);
router(app);

app.use('/app', express.static('src'));

app.listen(3000);
console.log(`Listening http://localhost:3000`);
