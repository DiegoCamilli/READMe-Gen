const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./Utils/generateMarckdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is your Project Title? ',
        validate: projectTitle => {
            if ( projectTitle ) {
                return true;
            } else {
                console.log('Uh Oh! You must enter a unique Project Title. ')
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
                return true;
            } else {
                console.log('Uh Oh! Please enter a Project description. ')
                return false;
            }
        }
    },
    {
        name: 'instalation',
        type: 'input',
        message: 'Provide instructions for Instalation of your Project.',
        validate: instalation => {
            if ( instalation ) {
                return true;
            } else {
                console.log('Uh Oh! You must provide instalation instructions for your Project.')
                return false;
            }
        }
    },

    {
        name: 'usage',
        type: 'input',
        message: 'How do we use this Project? ',
        validate: usage => {
            if ( usage ) {
                return true;
            } else {
                console.log('Uh Oh! You must provide usage instructions.')
                return false;
            }
        }
    },

    {
        name: 'contributions',
        type: 'input',
        message: 'What are your contribution guidelines? ',
        validate: contribution => {
            if ( contribution ) {
                return true;
            } else {
                console.log('Uh Oh! You must provide instructions on how to contribute.')
                return false;
            }
        }
    },

    {
        name: 'tests',
        type: 'input',
        message: 'How should Tests be conducted? ',
        validate: tests => {
            if ( tests ) {
                return true;
            } else {
                console.log('Uh Oh! You must provide instructions for tests.')
                return false;
            }
        }
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();