Step 1: Creating a New Project

  Make a new project in the Google Developer Console

  Select a project in the top left corner

Step 2: Create API Credentials
  
  Go to project settings

  Click the API Credentials
  
  Go to APIs overview and select Credentials
  
  Click the Create Credentials and choose OAuth client ID from the list
  
  Press the Configure consent screen and name your app
  
  After above step you will be redirected back to the Create client ID page.Under Application Type, choose Web Application
  
  You can give your client ID any name you like, but under Restrictions in the Authorized redirect URIs section add https://developers.google.com/oauthplayground

Step 3: Save your Client ID and Client Secret

Step 4: Configure OAuth

  Go to https://developers.google.com/oauthplayground and click the tools icon

  Check the box that says Use your own OAuth credentials and enter your client ID and secret. Without closing out of the settings, enter 

  https://mail.google.com/ into the box in the Select and authorize APIs section and press Authorize APIs
  
  Then we will get refreshtoken, save it

Step 5: create a folder

  Go to your folder using command line or terminal and enter npm init or npm init your projectfoldername

  npm install express body-parser nodemailer googleapis

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  add above code to package.json
  create a file (eg. server.js) and add the following code
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
            clientId: "817440176406-dulrcsoih1voonv5316qce9j08b44d3q.apps.googleusercontent.com", // client id
            clientSecret: "hKWU15z_LM5ycGdBHj9J8dyR", // client secret
            refreshToken: "1//04vL4FJhy2_AgCgYIARAAGAQSNwF-L9IrKIm3UMPBLFGQXQ9OExqLBMro8a4A_ZghpnaAOPrKml3VVYDnlerbNDvqIOZDnm4SmlQ", // refresh token
            accessToken: myAccessToken //access token variable we defined earlier
       }});


  app.post('/sendemail',function(req,res){
  const mailOptions = {
  from: 'neuralnetworktechs@gmail.com', // sender mail id
  to: 'ckotcherlakota@gmail.com', // receiver mail id
  subject: 'Mail from Chaitanya', // Subject
  html: '<p>You have received this email using srinivasteja api :)</p>'// html body
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

Step 6: Run the code

  run it using node filename.js(server.js)

  open postman

  make sure the method is set to “POST” and paste the following url in request URL
  http://localhost:3000/sendemail

  click send

  if your receive a message like following in the console, email is sent . Please check your mail box
    {
      "message": "Email has been sent: check your inbox!"
    }

  else
    please check your code

  
  
  
