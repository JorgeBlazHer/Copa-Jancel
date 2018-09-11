var connectionString = "postgres://tturhiullmzyls:105d77932273efa8512035b31c8a0f0d121e5c2213cc03df69b761285a391de5@ec2-50-16-196-138.compute-1.amazonaws.com:5432/d4dmvoj2d7e3at";

const Sequelize = require('sequelize');

sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
    }
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



Torneos.sync({force: true}).then(() => {
  // Table created
  return Torneos.create({
          nombre: "Primera liga jancel",
          fecha: '2010-09-02',
          tipo: 'Liga',
          partidos: [[{
            local: 'jorge',
            golesLocal: 2,
            visitante: 'villar',
            golesVisitante: 0,
            jornada: 1},
            {
            local: 'jorge',
            golesLocal: 2,
            visitante: 'villar',
            golesVisitante: 0,
            jornada: 1}],

            [{
            local: 'jorge',
            golesLocal: 2,
            visitante: 'villar',
            golesVisitante: 0,
            jornada: 2}],
            [{
            local: 'jorge',
            golesLocal: 2,
            visitante: 'villar',
            golesVisitante: 0,
            jornada: 3},
            {
            local: 'jorge',
            golesLocal: 2,
            visitante: 'villar',
            golesVisitante: 0,
            jornada: 3}]]
  
  });
});
