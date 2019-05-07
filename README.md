# ImaniClinic
Redesign of the Imani Clinic Website. This is the redesign of the contact page. 

## Dependencies:
- You need node.js and npm
- Navigate to the project folder in terminal or command line
- Run 'npm install' to get all additional dependencies
- Run 'npm start' to start a local server
- Open a browser and navigate to "localhost:5000" to see the project
  - Go to "localhost:5000/<name_of_view>" to see whichever page you're looking for (ex: 'localhost:5000/contact')

## Key Features
- The HTML for the contact page is located in `views/contact.handlebars`
- All CSS styles and JavaScript are located in `public/css` and `public/js`
- Currently, the page has some back-end code that takes data from the mailing list form, and sends it to email of your choice
- User email and password has to be specified in `app.js`, and target address has to be specified as well

## Tools Used
- HTML5
- CSS
- Node.js
- Express
- express-handlebars: https://github.com/ericf/express-handlebars
- body-parser: https://github.com/expressjs/body-parser
- Nodemailer: https://nodemailer.com
