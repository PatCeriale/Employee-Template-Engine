// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

inquirer
  .prompt([
    //manager
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
      name: "officeNumber",
      message: "What is the employee's office number?",
      type: "input",
    },
  ])
  .then(function (response) {
    // TODO: Where does this go?
    class Manager extends Employee {
      constructor(id, email, officeNumber) {
        // TODO: Will response.name come from the parent constructor?
        super(response.name, "Manager");
        this.id = response.id;
        this.email = response.email;
        this.officeNumber = response.officeNumber;
      }
    }
    console.log(response),
      function (err) {
        if (err) {
          return console.log(err);
        }
      };
  });

module.exports = Manager;
