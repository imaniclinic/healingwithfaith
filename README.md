# ImaniClinic
Redesign of the Imani Clinic Website.

## Getting Started:
### Clone this new file structure
  - git clone https://github.com/samrcwaters/ImaniClinic.git
  - git checkout final
### Download Node.js
- You need node.js and npm
  - [Download them here](https://nodejs.org/en/) 
  - Open a new command prompt or terminal and type "node --version" to make sure you have them installed
- Navigate to the project folder (/ImaniClinic) in terminal or command line
- Run 'npm install' to get all additional dependencies
- Run 'npm start' to start a local server
- Open a browser and navigate to "localhost:5000" to see the project
  - Go to "localhost:5000/<name_of_view>" to see whichever page you're looking for (ex: 'localhost:5000/contact')

## Contribute
### Make your own branch (don't commit straight to "final")
- git checkout -b <name_of_your_branch>
### HTML pages
- Put all HTML pages go in /views/
  - rename them with the file extension ".handlebars" instead of ".html" and you'll be good to go.
- Example: The HTML for the contact page is located in `views/contact.handlebars`
### CSS files:
- All CSS styles and JavaScript are located in `public/css/` and `public/js/`
- Server code is in app.js
### When you're done making changes, make a pull request
- Double check to make sure everything works on your branch before making a pull request
- Go [here](https://github.com/samrcwaters/ImaniClinic/pulls), click "make pull request" and select the "from" branch to be <name_of_your_branch> (whatever you called your branch), and the destination to be "final".
- Resolve any merge conflicts, click "commit merge", and you're done!

## Tools Used
- HTML5
- CSS
- Node.js
- Express
- Nodemon
- express-handlebars: https://github.com/ericf/express-handlebars
- body-parser: https://github.com/expressjs/body-parser
- Nodemailer: https://nodemailer.com
