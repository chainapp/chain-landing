var express = require('express');
var app = express();
var mongoose = require('mongoose');
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "doyoufacefight@gmail.com",
       pass: "fac3f1ght"
   }
});
mongoose.connect('mongodb://localhost:27017/facefight');
app.use(express.static('./'));

var subscriberSchema = mongoose.Schema({

        name        : String,
        email     : String,
    
});

var SubscriberModel = mongoose.model('subscriber', subscriberSchema);


app.get('/subscribe',function(req,res){

    console.log(req.param('name'));
    console.log(req.param('mail'))

    var name = req.param('name');
    var email = req.param('mail');

    var newSubscriber = {name:name,email:email};

    var subscriber = new SubscriberModel(newSubscriber);
    subscriber.save(function (err, addedMatch) {
        if (err) throw err;

        smtpTransport.sendMail({
           from: "Facefight <facefight@gmail.com>", // sender address
           to: name+" <"+email+">", // comma separated list of receivers
           subject: "Welcome to Facefight ✔", // Subject line
           text: "Welcome to Facefight "+name+" ! Thanks for your subscription, stay tuned for news to come." // plaintext body
        }, function(error, response){
           if(error){
               console.log(error);
           }else{
               console.log("Message sent: " + response.message);
           }
        });

        res.redirect('/');
    });

})

app.listen(process.env.PORT || 8081);