const inquirer = require('inquirer');
//const fs = require("fs");
//const generatePage = require('./src/page-template');
//const pageHTML = generatePage(nam, github);
//fs.writeFile('./index.htm', pageHJTML, err => {
   // if (err) throw err;

   // console.log('Portfolio Completed! Check out index.html to see the output!');
//});
inquirer
.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
}
])
.then(answer => console.log(answer));
