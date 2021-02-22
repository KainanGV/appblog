const express = require('express');
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const app = express();
// const mongoose = require('mongoose');

//Configs
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());
app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

//Routes



//Server
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor Rolando")
})