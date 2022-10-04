const express = require('express');
const app = express();

const path = require('path');
const publiPath = path.resolve(__dirname,'./public')
app.use(express.static(publiPath));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

/* app.get('/', (req,res)=> {
    res.send('index.html')
}); */

app.listen(3000, () => { 
    console.log('http://localhost:3000/')
});

