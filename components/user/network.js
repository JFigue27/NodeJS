const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', (req, res) => {
  // code here
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Internal Error', 500, err);
    });
});

router.get('/', (req, res) => {
  controller
    .getUsers()
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;