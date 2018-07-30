const express = require('express');
const path = require('path');
const e = require('events');

const app = express(); 

app.get('/',(req, res) =>{
    console.log("There is a GET request.");
    res.sendFile(__dirname + "/html/loadingPage.html");
});

app.use('/CSS/index.css', express.static(path.join(__dirname, '/CSS/index.css')));

app.listen(3000,function(){
    console.log("Listening on port 3000");
});