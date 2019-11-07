// in sublime
var express = require('express');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var app = express();




app.set('views', __dirname + '/app/templates');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/app'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.get('/', function (req, res) {
  res.render('index.html');
});

const torneosPasados=[];

const torneosEnCurso=[];


app.get('/enCurso', function (req, res) {
  res.send({torneos: torneosEnCurso});
});


app.get('/pasados', function (req, res) {
  res.send({torneos: torneosPasados});
});

app.post('/pasados', function (req, res) {
  var id = req.body.id;

  var i=0;
  var sal=0;
  torneosEnCurso.forEach(tor => {
    if(tor.id===id){
      torneosPasados.push(tor);
      sal=i
    }
    i++;
  });
  torneosEnCurso.splice( sal, 1 );
  res.send("ok");
});




app.post('/actualizar', function (req, res) {
  var id = req.body.id;
  torneosEnCurso.forEach(tor => {
    if(tor.id===id){
      tor.partidos=req.body.partidos;
    }
  });
  res.send("ok");
});



app.post('/enCurso', function (req, res) {

  torneosEnCurso.push(req.body);
  res.send("ok");
});



app.post('/borrarEnCurso', function (req, res) {
  var id = req.body.id;
  console.log(id);

  torneosEnCurso.forEach(tor => {
    if(tor.id===id){
      sal=i
    }
    i++;
  });
  torneosEnCurso.splice( sal, 1 );
  res.send("ok");
});



app.listen(port, function () {
  console.log('Express server running at http://localhost:' + port);
});

