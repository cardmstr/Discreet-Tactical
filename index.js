var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', ('process.env.PORT' || 5000))

app.use(express.static('site'));
app.use(bodyParser.json());

app.get('/', function(req, res){
  response.render('/');
})


app.listen((process.env.PORT || 5000), function(){
  console.log('app running on port ',(process.env.PORT || 5000));
})
