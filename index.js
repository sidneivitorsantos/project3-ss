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
const myData = require('./data');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    
    res.send('Welcome to our schedule website');

});

app.get('/users', (req,res) => {
    res.send('there are no users');
});

app.get('/schedules', (req,res) => {
    res.send('there are no users');
});

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});

