// JavaScript source code


var exp = require('express');

var app = exp();

app.listen(9000, function ()
{
    console.log("Server Started on Port NO. 9000");
});

app.get('/Greet.html', function (req, res)
{
    res.sendFile(__dirname + '/Greet.html');
});