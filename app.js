const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Array of full team to send to renderer
const employees = [];

// Questions to ask every employee
function getEmployeeQuestions(role) {
  return [
    {
      name: "name",
      message: `What is the ${role}'s name?`,
      type: "input",
    },
    {
      name: "id",
      message: `What is the ${role}'s ID number?`,
      type: "input",
    },
    {
      name: "email",
      message: `What is the ${role}'s email?`,
      type: "input",
    },
  ];
}

// Extra questions to ask manager
function createManager() {
  return inquirer
    .prompt([
      ...getEmployeeQuestions("manager"),
      {
        name: "officeNumber",
        message: "What is the manager's office number?",
        type: "input",
      },
    ])
    .then((answers) => {
      const { name, id, email, officeNumber } = answers;
      return new Manager(name, id, email, officeNumber);
    });
}

// Extra questions to ask engineer
function createEngineer() {
  return inquirer
    .prompt([
      ...getEmployeeQuestions("engineer"),
      {
        name: "github",
        message: "What is the engineer's github?",
        type: "input",
      },
    ])
    .then((answers) => {
      const { name, id, email, github } = answers;
      return new Engineer(name, id, email, github);
    });
}

// Extra questions to ask intern
function createIntern() {
  return inquirer
    .prompt([
      ...getEmployeeQuestions("intern"),
      {
        name: "school",
        message: "What is the intern's school?",
        type: "input",
      },
    ])
    .then((answers) => {
      const { name, id, email, school } = answers;
      return new Intern(name, id, email, school);
    });
}

// Final question asking for more employees or if we're done here
function employeeCreationLoop() {
  return (
    inquirer
      .prompt({
        name: "role",
        message: "What role is the next team member?",
        type: "list",
        choices: ["Engineer", "Intern", "Done"],
      })
      .then((answers) => {
        const { role } = answers;
        switch (role) {
          case "Engineer":
            return createEngineer();
          case "Intern":
            return createIntern();
          default:
            break;
        }
      })
      // Adds new employee to employees array
      .then((employee) => {
        if (employee != null) {
          employees.push(employee);
          return employeeCreationLoop();
        }
      })
  );
}
// Starts the inquirer questions
createManager()
  .then((manager) => {
    employees.push(manager);
    return employeeCreationLoop();
  })
  .then(() => {
    //Renders to our team.html file in the output folder
    const result = render(employees);
    fs.writeFileSync(outputPath, result);
  })
  .catch((err) => {
    console.error(err);
  });
