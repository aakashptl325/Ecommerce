var ex = require('express');
var app = ex();

app.listen(9000, function ()
{
	console.log("Server Started at port no 9000");
});

app.get('/Ass3.html', function (req, res) {
	res.sendFile(__dirname + '/Ass3.html');
});

app.get('/login', function (req, res)
{
	var userid = req.query.uid;
	var userpwd = req.query.pwd;

	if (userid == 'Object' && userpwd == 'KnowIt')
		res.send("<h1>Succsessfully Enter to web page</h1>");
	else
		res.send("<h1>Login failed</h1>");
});