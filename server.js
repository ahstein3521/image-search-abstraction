var express=require('express')
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var hbs = require('hbs');

//require('./secret');

mongoose.connect(process.env.MONGO_URI);


var app=express()
var port=process.env.PORT||3000;

app.use('/',express.static('./public'))
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'hbs');
hbs.registerPartials('./views/partials');


require('./server/routes')(app)

app.listen(port,function(){
  console.log("Express is listening on port "+port)
})






