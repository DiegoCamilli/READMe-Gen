const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./Utils/generateMarkdown")

// these are the prompts for the terminal in order for the user to write the markdown

const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is your Project Title? ',
        validate: title => {
            if ( title ) {
                return true
            } else {
                console.log('Uh Oh! You must enter a Project Title. ')
                return false
            }
        }
    },

    {
        name: 'description',
        type: 'input',
        message: 'Enter a description for your Project. ',
        validate: description => {
            if ( description ) {
                return true
            } else {
                console.log('Uh Oh! Please enter a Project description. ')
                return false
            }
        }
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Provide instructions for Instalation of your Project.',
        validate: installation => {
            if ( installation ) {
                return true
            } else {
                console.log('Uh Oh! You must provide instalation instructions for your Project.')
                return false
            }
        }
    },

    {
        name: 'usage',
        type: 'input',
        message: 'How do we use this Project? ',
        validate: usage => {
            if ( usage ) {
                return true
            } else {
                console.log('Uh Oh! You must provide usage instructions.')
                return false;
            }
        }
    },

    {
        name: 'license',
        type: 'list',
        message: 'Please select a lisence type: ',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD-3', 'No License']
    },

    {
        name: 'contribute',
        type: 'input',
        message: 'What are your contribution guidelines? ',
        validate: contribute => {
            if ( contribute ) {
                return true
            } else {
                console.log('Uh Oh! You must provide instructions on how to contribute.')
                return false
            }
        }
    },

    {
        name: 'tests',
        type: 'input',
        message: 'How should Tests be conducted? ',
        validate: tests => {
            if ( tests ) {
                return true
            } else {
                console.log('Uh Oh! You must provide instructions for tests.')
                return false
            }
        }
    },

    {
        name: 'github',
        type: 'input',
        message: 'Enter your GitHub link or username. ',
        validate: github => {
            if ( github ) {
                return true
            } else {
                console.log('Uh Oh! You must enter a GitHub account.')
                return false
            }
        }
    },

    {
        name: 'email',
        type: 'input',
        message: 'Enter your prefered Email. ',
        validate: email => {
            if ( email ) {
                return true
            } else {
                console.log('Uh Oh! You must enter your prefered Email. ')
                return false
            }
        }
    }
]

// this is functon that makes a readme file by taking the inpput
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./Dist/README.md', data, err => {
            if (err) {
                reject (err)
                return;
            }
            resolve({
                ok: true, 
                message: 'To view your new READMe file, Check the "Dist" folder. '
            })
        })
    })
}

// user .then to get the responce or an error
function init() {
    return inquirer.prompt(questions)
}

init()
.then(data => {
    const markdown = generateMarkdown(data);
    return writeToFile("README.md", markdown);
})
.then(response => {
    console.log(response.message);
})
.catch(err => {
    console.log(err);
})