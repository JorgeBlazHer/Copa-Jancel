// in sublime
var express = require('express');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var connectionString = "postgres://tjkwdwmllojrsg:4a7c36245d5954228dbc17b32af347033509258647ba6bf34929912bee373632@ec2-174-129-252-240.compute-1.amazonaws.com:5432/d1742ns7op2m37";

var app = express();




app.set('views', __dirname + '/app/templates');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/app'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('index.html');
});



const Sequelize = require('sequelize');

sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

// Or you can simply use a connection uri
//sequelize = new Sequelize(connectionString);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port, function () {
      console.log('Express server running at http://localhost:' + port);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Torneos = sequelize.define('torneos', {

  nombre: {
    type: Sequelize.STRING
  },
  tipo: {
    type: Sequelize.STRING
  },
  fecha: {
    type: Sequelize.DATE
  },
  cerrado: {
    type: Sequelize.BOOLEAN
  },
  partidos: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  }

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
  Torneos.update(
    {
      cerrado: true,
      partidos: req.body.partidos,
      fecha: datetime
    },
    { where: { id: id } }
  );
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
  console.log(req.body);
  res.send("ok");
});



app.post('/borrarEnCurso', function (req, res) {
  var id = req.body.id;
  console.log(id);
  Torneos.destroy(
    { where: { id: id } }
  );
  console.log(req.body);
  res.send("ok");
});





