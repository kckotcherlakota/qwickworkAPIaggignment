# qwickworkAPIassignment




### Step 1: Creating a New Project

  Make a new project in the Google Developer Console

  Select a project in the top left corner

### Step 2: Create API Credentials
  
  Go to project settings

  Click the API Credentials
  
  Go to APIs overview and select Credentials
  
  Click the Create Credentials and choose OAuth client ID from the list
  
  Press the Configure consent screen and name your app
  
  After above step you will be redirected back to the Create client ID page.Under Application Type, choose Web Application
  
  You can give your client ID any name you like, but under Restrictions in the Authorized redirect URIs section add https://developers.google.com/oauthplayground

### Step 3: Save your Client ID and Client Secret

### Step 4: Configure OAuth

  Go to https://developers.google.com/oauthplayground and click the tools icon

  Check the box that says Use your own OAuth credentials and enter your client ID and secret. Without closing out of the settings, enter 

  https://mail.google.com/ into the box in the Select and authorize APIs section and press Authorize APIs
  
  Then we will get refreshtoken, save it

### Step 5: create a folder

  Go to your folder using command line or terminal and enter npm init or npm init your projectfoldername

  npm install express body-parser nodemailer googleapis


### Step 6: Run the code

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

  
  
  
