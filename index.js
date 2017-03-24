var express = require('express');
var bodyParser = require('body-parser');
var secrets = require('./secrets');
var routeCtrl = require('./site/states/routesCtrl');


var app = express();

app.set('port', ('process.env.PORT' || 5000))

app.use(express.static('site'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ //needed for ContactForm
    extended: true
}));


app.get('/', routeCtrl.getHome);


app.post('/contactSubmit', routeCtrl.contactSubmit);

app.listen((process.env.PORT || 5000), function(){
  console.log('app running on port ',(process.env.PORT || 5000));
})
