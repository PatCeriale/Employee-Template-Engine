// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

class Employee {
  constructor(name, role) {
    this.id = response.name;
    this.role = response.role;
  }
}
inquirer
  .prompt([
    {
      name: "name",
      message: "What is your name?",
      type: "input",
    },
    {
      name: "role",
      message: "What is your role at this company?",
      type: "list",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ])
  .then(function (response) {
    console.log(response),
      function (err) {
        if (err) {
          return console.log(err);
        }
      };
  });

module.exports = Employee;
