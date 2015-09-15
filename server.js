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
//mongoose.connect('mongodb://52.17.127.121:27017/facefight');
//mongoose.connect('mongodb://localhost:27017/facefight');
app.use(express.static('./'));

var subscriberSchema = mongoose.Schema({

        name        : String,
        email     : String,
        registrationDate : Date
    
});

var SubscriberModel = mongoose.model('subscriber', subscriberSchema);


app.get('/subscribe',function(req,res){

    console.log(req.param('name'));
    console.log(req.param('mail'))

    var name = req.param('name');
    var email = req.param('mail');

    var newSubscriber = {name:name,email:email,registrationDate:new Date()};

    var subscriber = new SubscriberModel(newSubscriber);
    subscriber.save(function (err, addedMatch) {
        if (err) throw err;
        res.send('OK');
    });

})

app.listen(process.env.PORT || 8081);