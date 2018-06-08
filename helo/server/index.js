require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport')
const bodyParser = require('body-parser');
const hc = require('./controller.js');
const massive = require('massive');
const ctrl = require('../server/controller')
const app = express();

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;


app.use( bodyParser.json() );


massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    console.log("database is connected");
    app.set("db", dbInstance);
  })
  .catch(err => {
    app.set("db", dbInstance);
    console.log(err);
  });


app.listen(SERVER_PORT, () => {
    console.log(`Listening on port:`, SERVER_PORT)
});
