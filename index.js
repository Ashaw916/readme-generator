const fs = require("fs");
const Fsfunc = require("./fsfunc");
const inquirer = require("inquirer");

const fsfunc = new Fsfunc();

const questions = [
  {
    type: "input",
    name: "badge",
    message: "input badge code ",
  },
  {
    type: "input",
    name: "title",
    message: "What id the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description.",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "describe usage.",
  },
  {
    type: "checkbox",
    message: "Choose a license.",
    name: "license",
    choices: [
      "MIT License",
      "Apache License",
      "GPL License,",
      "Public Domain (Unlicensed)",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the rules for contributing?",
  },
  {
    type: "input",
    name: "authors",
    message: "Who are the authors?",
  },
  {
    type: "input",
    name: "tests",
    message: "Run tests here",
  },
  {
    type: "input",
    name: "questions1",
    message: "Enter the url of your profile picture",
  },
  {
    type: "input",
    name: "questions2",
    message: "Enter email",
  },
  {
    type: "input",
    name: "toc",
    message: "Write a table of contents separated by commas",
  },
];
console.clear();

inquirer.prompt(questions).then((response) => {
  fsfunc.append(
    "README.md", 
    "# " + response.title + "\n"
  );

  fsfunc.append(
    "README.md", 
    "\n" + response.badge + "\n"
  );

  fsfunc.append(
    "README.md",
    "## Table of Contents" +
    "\n" +
    "- " +
    response.toc.split(", ").join("\n" + "- ") +
    "\n"
  );

  fsfunc.append(
    "README.md",
    "## Installation Istructions" + "\n" + response.installation + "\n"
  );

  fsfunc.append(
    "README.md",
    "## Usage" + "\n" + response.usage + "\n"
  );

  fsfunc.append(
    "README.md",
    "## License" + "\n" + response.license + "\n"
  );

  fsfunc.append(
    "README.md",
    "## How to Contribute" + "\n" + response.contributing + "\n"
  );

  fsfunc.append(
    "README.md", 
    "## Authors " + "\n" + response.authors + "\n"
  );

  fsfunc.append(
    "README.md",
    "## How to Run Tests " + "\n" + response.tests + "\n"
  );

  fsfunc.append(
    "README.md",
    "## Contact Info" + "\n" + "![alt text](" + response.questions1 + ")" + "\n"
  );

  fsfunc.append(
    "README.md", 
    "\n" + response.questions2 + "\n"
  );

  const message = fsfunc.read("README.md");

  console.log(message);
});
