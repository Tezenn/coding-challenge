require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const db = require('./db/db');
const auth = require('./auth');

app.use(bodyParser.json());
app.use(router);

app.listen(process.env.PORT || 3001);
