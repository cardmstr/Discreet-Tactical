var nodemailer = require('nodemailer');
var secrets = require('../secrets');
var app = require('../index');

module.exports = {
    getHome: function(req, res){
      res.render('/');
    },
    getClasses: function(req,res){
      var db = app.get('db');

      db.get_classes(function(err, classes){
        classes.forEach(function (course) {
          var date = new Date(course.date.toString());
          var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          course.date = `${months[date.getMonth()]} ${date.getDate()}`;

          var time = course.time;
          time = time.split(':');
          var hour = time[0];
          var min = time[1];
          var ind = '';
          if(hour>12){
            ind = 'PM';
            hour -= 12;
          } else {
            ind = 'AM';
          };
          course.time = `${hour}:${min} ${ind}`;
        });

        res.send(classes);
      });
    },
    contactSubmit: function(req,res){
        var data=req.body;

        var smtpTransport = nodemailer.createTransport({
           service: "Gmail",
           auth: {
           user: secrets.emailID,
           pass: secrets.emailPass
        }});

        var htmlMsg = "Name: " + req.body.name + "<br>Phone: " + req.body.phone + "<br>Email: " + req.body.email + "<br>Message: " + req.body.message;

         smtpTransport.sendMail({
         from: "Discreet Form <" + secrets.emailID +">",
         to: secrets.emailTo,
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
      }
}
