// in sublime
var express = require('express');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var connectionString = "postgres://tturhiullmzyls:105d77932273efa8512035b31c8a0f0d121e5c2213cc03df69b761285a391de5@ec2-50-16-196-138.compute-1.amazonaws.com:5432/d4dmvoj2d7e3at";

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

sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

// Or you can simply use a connection uri
//const sequelize = new Sequelize(connectionString);

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


app.get('/enCurso', function (req, res) {
  Torneos.findAll({
    where: {
      cerrado: false
    }
  }).then(users => {
    res.send({ torneos: users });
  })
});


app.get('/pasados', function (req, res) {
  Torneos.findAll({
    where: {
      cerrado: true
    }
  }).then(users => {
    res.send({ torneos: users });
  })
});

app.post('/pasados', function (req, res) {
  
  req.body.cerrado=true;
  var datetime = new Date();
  req.body.fecha=datetime;
  console.log(req.body);
  var id=req.body.id;
  Torneos.update(
    {cerrado: true,
    partidos: req.body.partidos,
    fecha: datetime},
    {where: {id: id}}
  );




  res.send("ok");
});



app.post('/enCurso', function (req, res) {
  Torneos.bulkCreate([
    req.body
  ]);
  console.log(req.body);
  res.send("ok");
});




