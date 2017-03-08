var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('site'));
app.use(bodyParser.json());

app.get('/contact', function(req, res){
  console.log(req);
})

app.listen(3000, function(){
  console.log('app running on port ',3000);
})
