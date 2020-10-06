// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

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
    // TODO: Where does this go?
    class Employee {
      constructor(name, role) {
        this.name = response.name;
        this.role = response.role;
      }
    }
    console.log(Employee),
      function (err) {
        if (err) {
          return console.log(err);
        }
      };
  });
module.exports = Employee;
