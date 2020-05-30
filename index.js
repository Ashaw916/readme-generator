const fs = require("fs");
const inquirer = require("inquirer");

const questions = [

    {
    type: "input",
    name: "badge",
    message: "input badge code "
    },
    {
    type: "input",
    name: "title",
    message: "What id the title of your project?"
    },
    {
    type: "input",
    name: "description",
    message: "Write a description."
    },
    {
    type: "input",
    name: "installation",
    message: "Installation instructions."
    },
    {
    type: "input",
    name: "usage",
    message: "describe usage."
    },
    {
    type: "checkbox",
    message: "Choose a license.",
    name: "license",
    choices: [
        "MIT License", 
        "Apache License", 
        "GPL License,", 
        "Public Domain (Unlicensed)"
    ]},
    {
    type: "input",
    name: "contributing",
    message: "What are the rules for contributing?"
    },
    {
    type: "input",
    name: "authors",
    message: "Who are the authors?"
    },
    {
    type: "input",
    name: "tests",
    message: "Run tests here"
    },
    {
    type: "input",
    name: "questions1",
    message: "Enter the url of your profile picture"
    },
    //   Format: ![alt text](url)
    {
    type: "input",
    name: "questions2",
    message: "Enter email"
    },
    {
    type: "input",
    name: "toc",
    message: "Write a table of contents separated by commas"
    },
]
console.clear(); 

inquirer
    .prompt(questions).then(response => {
    
    fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });

    fs.appendFileSync("README.md", ('\n' + response.badge) + '\n', function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Description" + '\n' + response.description) + '\n', function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Table of Contents" + '\n' + '- ' + response.toc.split(", ").join('\n' + '- ')) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Installation Istructions" + '\n' + response.installation) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Usage" + '\n' + response.usage) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## License" + '\n' + response.license) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## How to Contribute" + '\n' + response.contributing) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Authors " + '\n' + response.authors) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## How to Run Tests " + '\n' + response.tests) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Contact Info" + '\n' + "![alt text](" + response.questions1 + ")") + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ('\n' + response.questions2) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
        });
    });

