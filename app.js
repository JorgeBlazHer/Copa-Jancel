// in sublime
var express = require('express');
var port = process.env.PORT || 3000;

var connectionString = "postgres://tturhiullmzyls:105d77932273efa8512035b31c8a0f0d121e5c2213cc03df69b761285a391de5@ec2-50-16-196-138.compute-1.amazonaws.com:5432/d4dmvoj2d7e3at";

var app = express();

app.set('views', __dirname + '/app/templates');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/app'));

app.set('view engine', 'ejs');

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
  partidos: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  }
  
});



app.get('/prueba', function (req, res) {
  Torneos.findAll().then(users => {
    res.send(users);
  })
});


app.get('/pasados', function (req, res) {
  Torneos.findAll().then(users => {
    res.send({torneos: users});
  })
});




