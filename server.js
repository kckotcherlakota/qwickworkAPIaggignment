const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.get('/',function(req,res){
res.send({
message:'Default route in email tutorial project'
})
});
const myOAuth2Client = new OAuth2(
"817440176406-dulrcsoih1voonv5316qce9j08b44d3q.apps.googleusercontent.com",//client id
"hKWU15z_LM5ycGdBHj9J8dyR",//client secret
"https://developers.google.com/oauthplayground"
)
myOAuth2Client.setCredentials({
refresh_token:"1//04vL4FJhy2_AgCgYIARAAGAQSNwF-L9IrKIm3UMPBLFGQXQ9OExqLBMro8a4A_ZghpnaAOPrKml3VVYDnlerbNDvqIOZDnm4SmlQ"
});
const myAccessToken = myOAuth2Client.getAccessToken()
const transport = nodemailer.createTransport({
     service: "gmail",
     auth: {
          type: "OAuth2",
          user: "neuralnetworktechs@gmail.com", //your gmail account you used to set the project up in google cloud console"
          clientId: "817440176406-dulrcsoih1voonv5316qce9j08b44d3q.apps.googleusercontent.com",
          clientSecret: "hKWU15z_LM5ycGdBHj9J8dyR",
          refreshToken: "1//04vL4FJhy2_AgCgYIARAAGAQSNwF-L9IrKIm3UMPBLFGQXQ9OExqLBMro8a4A_ZghpnaAOPrKml3VVYDnlerbNDvqIOZDnm4SmlQ",
          accessToken: myAccessToken //access token variable we defined earlier
     }});


app.post('/sendemail',function(req,res){
const mailOptions = {
from: 'neuralnetworktechs@gmail.com', // sender
to: 'neuralnetworktechs@gmail.com', // receiver
subject: 'Mail from Chaitanya', // Subject
html: '<p>You have received this email using chaitanya api :)</p>'// html body
}
transport.sendMail(mailOptions,function(err,result){
if(err){
res.send({
message:err
})
}else{
transport.close();
res.send({
message:'Email has been sent: check your inbox!'
})
}
})
})
app.listen(PORT, function (req, res) {
console.log(`Listening on port ${PORT}`);
})
