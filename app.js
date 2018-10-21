var express = require('express');

//adding express
var app = express();
var bodyParser = require('body-parser');

//todocontroller
var todoController = require('./controllers/todoController.js');


//setting view engine
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
//middleware
app.use(express.static('./public'));

//firing controller
todoController(app);

//listen to port
app.listen(3000);
console.log('Listening');

