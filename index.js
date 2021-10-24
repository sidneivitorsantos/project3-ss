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
console.log('my data is', myData);
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    
    res.send(mydata[0]);

});

app.get('/users', (req,res) => {
    res.send('there are no users');
});

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});

