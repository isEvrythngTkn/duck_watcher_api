const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
var { db } = require('./src/db');
const { createFeeding } = require('./src/apis/feedings');
const { formatResponse } = require('./src/apis/utils');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post('/feeding', async (req, res) => {
  const response = await createFeeding(req.body);
  res.send(response);
});

app.listen(process.env.PORT || 3001);