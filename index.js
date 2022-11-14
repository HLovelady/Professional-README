const fs = require('fs');
const inquirer = require('inquirer');


 inquirer
 .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
     type: 'input',
     message: 'What city do you live in?',
     name: 'city',
    },
    {
    type: 'input',
    message: 'Tell me about yourself?',
    name: 'bio',
    },
    {
    type: 'input',
    message: 'What is your LinkedIn URL?',
    name: 'LI',
    },
    {
    type: 'input',
    message: 'What is your GitHub URL?',
    name: 'Git',
    },
])
.then((response) => {
const page = generateHTML(response)

    console.log(response)
    saveFile(page)
}
)


const generateHTML = ({username: name, city, bio, LI, Git}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Bio</title>
</head>
<body class="bg-secondary text-white">

<h1>Hello</h1>

<div class="bg-info ">
    <ul>
        <li>Hello my name is ${name}</li>
        <li>I live in ${city}</li>
        <li>A little about me ${bio}: </li>
        <li>My LinkedIn: ${LI} </li>
        <li>My GitHub: ${Git}</li>

    </ul>
</div>

</body>
<script src = "./index.js"></script>
</html>`

const saveFile = (page) => {

    fs.writeFile('index.html', page, (err) =>
    err ? console.error(err) : console.log('Commit logged!'));
}