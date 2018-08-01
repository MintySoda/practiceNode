const express = require('express');
const path = require('path');
const e = require('events');

const app = express(); 

app.get('/',(req, res, next) =>{
    console.log("There is a GET request.");
    res.sendFile(__dirname + "/html/loadingPage.html");
});
app.post('/', (req, res)=>{
    // assigning element ID to simple variable
    document.getElementById("loader1") = loader1;
    document.getElementById("loader2") = loader2;
    document.getElementById("loader3") = loader3;
    
    // making onclick function and adding event listener
    loader1.onclick = function(){loading1()};
    loader1.addEventListener("click", function loading1(){
        res.redirect('/html/load1');
    });
    loader2.onclick = function(){loading2()};
    loader2.addEventListener("click", function loading2(){
        res.redirect('/html/load2');
    });
    loader3.onclick = function(){loading3()};
    loader3.addEventListener("click", function loading3(){
        res.redirect('/html/load3');
    });

    var loadOp = [loading1(), loading2(), loading3()];
    
    // whichever gets clicked will trigger the function or redirect to 
    //the loaded page...
    switch(loadOp){
        case 0:
            loading1();
            break;
        case 1:
            loading2();
            break;
        case 2:
            loading3();
            break;
    };
});

app.use('/CSS/index.css', express.static(path.join(__dirname, '/CSS/index.css')));

app.listen(3000,function(){
    console.log("Listening on port 3000");
});