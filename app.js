// in sublime
var express = require('express');
var port = process.env.PORT || 3000;


var app = express();

app.set('views', __dirname + '/app/templates');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/app'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index.html');
});

 


app.listen(port, function () {
 console.log('Express server running at http://localhost:' + port);
});
