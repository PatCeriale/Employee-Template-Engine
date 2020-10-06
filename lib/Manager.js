// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

inquirer
  .prompt([
    //manager
    {
      name: "id",
      message: "What is the employee's ID number?",
      type: input,
    },
    {
      name: "email",
      message: "What is the employee's email?",
      type: input,
    },
    {
      name: "office",
      message: "What is the employee's office number?",
      type: input,
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

module.exports = Manager;
