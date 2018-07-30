const express = require('express');
const path = require('path');
const e = require('events');


const Even = new e();
const app = express(); 
const pathObj = path.parse(__filename);

app.get('/',(req, res) =>{
    console.log("There is a GET request.");
    res.send("Hello there!");
});

app.post('/', (req,res) =>{
    res.send("There is a POST request");
});

app.put('/', (req, res) => {
    res.send("There is a PUT request");
});


console.log(pathObj);
Even.on("addition", ()=>{
    console.log("Let's add something.");
});

Even.emit("addition");

app.listen(3000,function(){
    console.log("Listening on port 3000");
});