var express = require('express');
var app  = express();

//app.get('/', function (req, res){
//res.send("Hello world from server.js")
//});

app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function(req, res){
console.log("I recive get Request");
person1 = {
    name :'jone',
    email:'jone@email.com',
    phone:'206-343-4343'
};
person2={
    name:'Ema',
    email:'ema@mail.com',
    phone:'202-343-8977'
};
person3={
    name:'samri',
    email:'samri@aol.com',
    phone:'204-456-8932'
};
var contactlist =[person1,person2,person3];
res.json(contactlist);
});

app.listen(3000);
console.log("server running on port 3000");