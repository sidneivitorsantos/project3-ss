// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
    
//     res.send('Hello World');

// });

// app.listen(port, () => {
//     console.log(`example app listening at http://localhost:${port});
// });

const express = require('express');
const data = require('./data');
const app = express();
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

// $> curl http://localhost:3000/users

app.get('/users/:id', (req,res) => {
    
    let id = req.params.id;
  if (data.users[id]) {
    res.json(data.users[id]);
  } else {
    res.json("User doesn't exist");
  }


    // res.send(req.params.user_id);
    // console.log(id);


   
});

app.get('users/:id/schedules', (req, res) => { });

const server=app.listen(3000, function() {} );

