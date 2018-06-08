require('dotenv').config();
const express = require('express');
const session = require('express-session');
//const passport = require('passport')
const bodyParser = require('body-parser');
//const hc = require('./controller.js');
const massive = require('massive');
//const ctrl = require('../server/controller')
const app = express();

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env;


app.use( bodyParser.json() );

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.get('/api/users', (req, res) => {
  const db = req.app.get('db');
        
  db.show_users()
  .then( users => res.status(200).send( users ) )
  .catch( () => res.status(500).send('error') );
})

app.post('/api/register', (req, res) => {
  const db = req.app.get('db');
  const { username, password } = req.body;
  const profile_pic = `https://robohash.org/${username}.png`;

  db.create_user([username, password, profile_pic]).then((dbRes) => {
    const { id, username, profile_pic } = dbRes[0];
    req.session.userid = username;
    res.status(200).send(id, username, profile_pic)
    .catch(() => res.status(500).send('error') ) ;
  });
});

app.post('/api/login', (req, res) => {
  const db = req.app.get('db');
  const { username, password } = req.body;
  db.login_user([username]).then((dbResp) => {
    const { id, profile_pic } = dbResp[0];
    if (dbResp[0].username === username && dbResp[0].password === password) {
      const username = dbResp[0].username;
      req.session.userid = username;
      res.status(200).send({ id, username, profile_pic });
      // res.status(200).send('You logged in!');
    } else {
      res.sendStatus(404).send('lmao wrong');
    }
  });
});


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
