const express = require('express');
const data = require('./data');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// import express from 'express';
// import { engine } from 'express-handlebars';
const handlebars = require('express-handlebars').engine

// app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



const port = 3000;

app.get('/', (req, res) => {
    
    res.send('Welcome to our schedule website');

});

app.get('/users', (req,res) => {
    res.send(data.users);
   
});

app.get('/schedules', (req,res) => {
    res.send(data.schedules);
   
});


app.get('/users/:user_id', (req,res) => {
    
    let id = req.params.user_id;
      if (data.users[id]) {
        res.json(data.users[id]);
      } else {
        res.json("User doesn't exist");
      }
   
});

app.get("/users/:userId/schedules", (req, res) => {
  let userSchedules = data.schedules.filter((schedule) => {
    return req.params.userId == schedule.user_id;
  });
  console.log(userSchedules);
  res.send(userSchedules);
});



app.get("/form", (req,res) => {
  // res.send('New user form');
  res.render('form');
  
 
});

app.post('/users', bodyParser.urlencoded({ extended: false }), (req,res) => {

  
  console.log(req.body);
  console.log(req.body.firstName);
  res.send(data.users);
 
});

const server=app.listen(3000, function() {} );

