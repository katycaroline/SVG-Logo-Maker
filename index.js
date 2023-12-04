const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 letters."
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like your text to be?"
    },
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like?",
        choices: ["Triangle","Square","Circle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape to be?"
    },
];