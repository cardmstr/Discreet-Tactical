var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var secrets = require('./secrets');
var routeCtrl = require('./site/states/routesCtrl');


var app = express();

app.set('port', ('process.env.PORT' || 5000))

app.use(express.static('site'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ //needed for ContactForm
    extended: true
}));

app.get('/', function(req, res){ //needed for Heroku
  response.render('/');
})

app.post('/contactSubmit', function(req,res){
  console.log(req);
  var data=req.body;
  console.log(req.body);

  var smtpTransport = nodemailer.createTransport({
     service: "Gmail",
     auth: {
     user: secrets.emailID,
     pass: secrets.emailPass
  }});

  var htmlMsg = "Name: " + req.body.name + "<br>Phone: " + req.body.phone + "<br>Email: " + req.body.email + "<br>Message: " + req.body.message;
console.log(htmlMsg);
   smtpTransport.sendMail({
   from: "Discreet Form <" + secrets.emailID +">",
   to: "Spencer Simons <spencersimons09@gmail.com>",
   subject: "Discreet Webform from " + req.body.name,
   html: htmlMsg
    }, function(error, response){
         if(error){
           res.render('contact', { title: 'Discreet Tactical - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
           console.log(error);
        }else{
           res.render('contact', { title: 'Discreet Tactical - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
           console.log("Message sent: " + res.message);
       }

   smtpTransport.close();
    });
    res.send('contactSubmit ran');
})




app.listen((process.env.PORT || 5000), function(){
  console.log('app running on port ',(process.env.PORT || 5000));
})
