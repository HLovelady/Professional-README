// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generatorMarkdown.js');

// TODO: Create an array of questions for user input
//const questions = [];
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project name: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? (Optional)',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose your license for your project.',
        name: 'license',
        choices: [
            { value: 'Apache' },   //Apache 2.0 License
            { value: 'BSD3' },  //BSD 3-Clause License
            { value: 'LGPL' },  //GNU LGPL v3
            { value: 'MIT' },  //The MIT License
            { value: 'MPL' }, //Mozilla Public License 2.0
            { value: 'None' }, 
        ]
    },
    {
        type: 'input',
        message: 'Explain how users can contribute to your project (Optional).',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide tests for project, and explain how to test (Optional).',
        name: 'test',
    },
    // {
    //     type: 'input',
    //     message: 'Do you have any question?(Optional).',
    //     name: 'questions',
    // },
    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your email: ",
        name: "email",
    }

];
    // .then((data) => {
    //     // TODO: Create a function to write README file
    //     const filename = data.title.replace(' ', "").toLowerCase()
    //     fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
    //         err ? console.error(err) : console.log("Thanks! Your Professional Readme is generated"))
    // })

//Write README function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Information successfully transferred to the README!');
    });
};
    
// //Initialize app function
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile(`${response.title}.md`, response);
    });
};

// Function call to initialize app
init();



// const fs = require('fs');
// const inquirer = require('inquirer');


//  inquirer
//  .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
//     {
//      type: 'input',
//      message: 'What city do you live in?',
//      name: 'city',
//     },
//     {
//     type: 'input',
//     message: 'Tell me about yourself?',
//     name: 'bio',
//     },
//     {
//     type: 'input',
//     message: 'What is your LinkedIn URL?',
//     name: 'LI',
//     },
//     {
//     type: 'input',
//     message: 'What is your GitHub URL?',
//     name: 'Git',
//     },
// ])
// .then((response) => {
// const page = generateHTML(response)

//     console.log(response)
//     saveFile(page)
// }
// )


// const generateHTML = ({username: name, city, bio, LI, Git}) =>
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
//     <title>Bio</title>
// </head>
// <body class="bg-secondary text-white">

// <h1>Hello</h1>

// <div class="bg-info ">
//     <ul>
//         <li>Hello my name is ${name}</li>
//         <li>I live in ${city}</li>
//         <li>A little about me ${bio}: </li>
//         <li>My LinkedIn: ${LI} </li>
//         <li>My GitHub: ${Git}</li>

//     </ul>
// </div>

// </body>
// <script src = "./index.js"></script>
// </html>`

// const saveFile = (page) => {

//     fs.writeFile('index.html', page, (err) =>
//     err ? console.error(err) : console.log('Commit logged!'));
// }