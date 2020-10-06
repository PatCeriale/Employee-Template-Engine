// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

inquirer
  .prompt([
    // Intern
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
      name: "university",
      message: "What university is the intern attending?",
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

module.exports = Intern;
