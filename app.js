const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Static folder
app.use('/public', express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {
  res.render('contact')
});

app.post('/send', (req,res) => {
  console.log(req.body);

  const output = `
    <p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
    <p>Subject: ${req.body.subject}</p>
    <p>Message: ${req.body.message}</p>
      `;

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '', // generated ethereal user
      pass: '' // generated ethereal password
    }
  });

  let mailOptions = { 
    from: '"Imani Clinic"',
    to: '',
    subject: 'Mailing list request',
    html: output
  }

  transporter.sendMail(mailOptions, (error,info) => {
    if(error) {
      return console.log(error);
    }

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.render('contact', {msg: 'Email has been sent!'});
  });
});

app.listen(process.env.PORT || 5000);