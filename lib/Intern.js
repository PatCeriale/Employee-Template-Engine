// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

inquirer
  .prompt([
    // Intern
    {
      name: "id",
      message: "What is the employee's ID number?",
      type: "input",
    },
    {
      name: "email",
      message: "What is the employee's email?",
      type: "input",
    },
    {
      name: "school",
      message: "What school is the intern attending?",
      type: "input",
    },
  ])
  .then(function (response) {
    // TODO: Where does this go?
    class Intern extends Employee {
      constructor(id, email, school) {
        // TODO: Will response.name come from the parent constructor?
        super(response.name, "Intern");
        this.id = response.id;
        this.email = response.email;
        this.school = response.school;
      }
    }
    console.log(response),
      function (err) {
        if (err) {
          return console.log(err);
        }
      };
  });

module.exports = Intern;
