var entorno='http://localhost:3000/';
if(process.env.NODE_ENV=="production"){
    var entorno='https://copa-jancel.herokuapp.com/';
}

console.log(entorno);