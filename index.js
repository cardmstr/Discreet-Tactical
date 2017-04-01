var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var secrets = require('./secrets');
var routeCtrl = require('./controllers/routesCtrl');
var massive = require('massive');

var connectionString = "postgres://spencersimons:@localhost/discreet_tactical";
var massiveInstance = massive.connectSync({ connectionString });

app.set('port', ('process.env.PORT' || 5000));
app.set('db', massiveInstance);

app.use(express.static('site'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // ContactForm
    extended: true
}));

//app.get('/', routeCtrl.getHome); // Heroku deployment

app.post('/contactSubmit', routeCtrl.contactSubmit);

app.get('/api/classes', routeCtrl.getClasses);

app.listen((process.env.PORT || 5000), function(){
  console.log('app running on port ',(process.env.PORT || 5000));
})
