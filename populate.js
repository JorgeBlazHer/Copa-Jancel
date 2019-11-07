var connectionString = "postgres://tjkwdwmllojrsg:4a7c36245d5954228dbc17b32af347033509258647ba6bf34929912bee373632@ec2-174-129-252-240.compute-1.amazonaws.com:5432/d1742ns7op2m37";

const Sequelize = require('sequelize');

console.log("llego");

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
	cerrado: {
		type: Sequelize.BOOLEAN
	},
	partidos: {
		type: Sequelize.ARRAY(Sequelize.JSON)
	}

});

const torneosEnCurso = sequelize.define('torneosEnCurso', {

	nombre: {
		type: Sequelize.STRING
	},
	tipo: {
		type: Sequelize.STRING
	},
	partidos: {
		type: Sequelize.ARRAY(Sequelize.JSON)
	}

});



Torneos.sync({ force: true }).then(() => {
	// Table created
	console.log("llego2");
	return Torneos.create({
		nombre: "Primera liga jancel",
		fecha: '2010-09-02',
		tipo: 'Liga',
		partidos: [[{
			local: 'jorge',
			golesLocal: 2,
			visitante: 'villar',
			golesVisitante: 0,
			jornada: 1
		},
		{
			local: 'jorge',
			golesLocal: 2,
			visitante: 'villar',
			golesVisitante: 0,
			jornada: 1
		}],

		[{
			local: 'jorge',
			golesLocal: 2,
			visitante: 'villar',
			golesVisitante: 0,
			jornada: 2
		}],
		[{
			local: 'jorge',
			golesLocal: 2,
			visitante: 'villar',
			golesVisitante: 0,
			jornada: 3
		},
		{
			local: 'jorge',
			golesLocal: 2,
			visitante: 'villar',
			golesVisitante: 0,
			jornada: 3
		}]]

	});
});

console.log("llego2");

//Torneos.sync({ force: true });
console.log("llego3");
