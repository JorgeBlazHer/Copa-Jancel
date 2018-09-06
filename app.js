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


app.get('/pasados', function (req, res) {
    res.send({
        torneos: [
        {
          nombre: "Primera liga jancel",
          fecha: '26/07/2018',
          tipo: 'Liga'
      },
      {
          nombre: "Segunda liga jancel",
          fecha: '26/07/2018',
          tipo: 'Liga'
      },
      {
          nombre: "Tercera liga jancel",
          fecha: '26/07/2018',
          tipo: 'Liga'
      },
      {
          nombre: "Primera copa jancel",
          fecha: '26/07/2018',
          tipo: 'Copa'
      },
      {
          nombre: "Segunda copa jancel",
          fecha: '26/07/2018',
          tipo: 'Copa'
      },
      {
          nombre: "Tercera copa jancel",
          fecha: '26/07/2018',
          tipo: 'Copa'
      }]
  });
});





app.listen(port, function () {
   console.log('Express server running at http://localhost:' + port);
});
