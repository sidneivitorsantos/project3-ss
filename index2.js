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
const Data = require('./data');
console.log('my data is', Data);
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    
    res.send(data[0]);

});

app.get('/users', (req,res) => {
    res.send('there are no users');
});

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});

