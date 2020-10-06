// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

inquirer
  .prompt([
    //Engineer
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
      name: "github",
      message: "What is the employee's GitHub user name?",
      type: "input",
    },
  ])
  .then(function (response) {
    // TODO: Where does this go?
    class Engineer extends Employee {
      constructor(id, email, github) {
        // TODO: Will response.name come from the parent constructor?
        super(response.name, "Engineer");
        this.id = response.id;
        this.email = response.email;
        this.github = response.github;
      }
    }

    console.log(response),
      function (err) {
        if (err) {
          return console.log(err);
        }
      };
  });

module.exports = Engineer;
