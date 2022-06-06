const inquirer = require("inquirer");
const cTable = require("console.table");
const connection = require("./connection");

// Main Menu
const menuPrompt = [{
    name: "menu",
    type: "list",
    message: "How may I help you?",
    choices: ["See Roles", "See Departments", "See all Employees", "Add Role", "Add Department", "Add Employee", "Update Existing Employee", "Nevermind"]
}];

// "Add" Prompts
const rolePrompt = [
    {
        name: "title",
        type: "input",
        message: "What is the role?"
    },

    {
        name: "salary",
        type: "input",
        message: "What is this role's salary?"
    },

    {
        name: "departmentID",
        type: "input",
        message: "What is this role's department?"
    }
];

const departmentPrompt = [
    {
        name: "department",
        type: "input",
        message: "What is the department?"
    }
];

const employeePrompt = [
    {
        name: "firstName",
        type: "input",
        message: "What this employee's first name?",
    },

    {
        name: "lastName",
        type: "input",
        message: "What's their last name?"
    },

    {
        name: "managerID",
        type: "input",
        message: "Who's their manager?"
    },

    {
        name: "roleID",
        type: "input",
        message: "What's their role?"
    }
];

async function addDepartment() {
    await inquirer.prompt(departmentPrompt)
        .then((answers) => {
            connection.query(`INSERT INTO departments(name) VALUES (?)`, answers.department, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result)
                connection.query(`SELECT * FROM departments`, (err, result) => {
                    if (err) {
                        console.log(err)
                    };
                    console.table(result);
                    startMenu();
                });
            });
        }); 
};

function addRole() {
    connection.query(`SELECT * FROM departments`, (err, result) => {
        if (err) {
            console.log(err)
        };
        console.table(result)
        inquirer.prompt(rolePrompt)
            .then((answers) => {
                connection.query(`INSERT INTO roles(title, salary, department_id) VALUES (?,?,?)`, [answers.title, answers.salary, answers.departmentID], (err, result) => {
                    if (err) {
                        console.log(err)
                    };
                    console.table(result)
                    connection.query(`SELECT * FROM roles`, (err, result) => {
                        if (err) {
                            console.log(err)
                        };
                        console.table(result);
                        startMenu();
                    });
                });
            });
    });
};

function addEmployee() {
    connection.query(`SELECT * FROM roles`, (err, result) => {
        if (err) {
            console.log(err)
        };
        console.table(result)
        inquirer.prompt(employeePrompt)
            .then((answers) => {
                connection.query(`INSERT INTO employees(first_name, last_name, manager_id, role_id) VALUES (?, ?, ?, ?)`, [answers.firstName, answers.lastName, answers.managerID, answers.roleID], (err, result) => {
                    if (err) {
                        console.log(err)
                    };
                    console.table(result)
                    connection.query(`SELECT * FROM employees`, (err, result) => {
                        if (err) {
                            console.log(err)
                        };
                        console.table(result);
                        startMenu();
                    });
                });
            });
    });
};

// Calls
function seeDepartments() {
    connection.query(`SELECT * FROM departments`, (err, result) => {
        if (err) {
            console.log(err);
        };
        console.table(result);
        startMenu();
    });
};

function seeRoles() {
    connection.query(`SELECT * FROM roles`, (err, result) => {
        if (err) {
            console.log(err);
        };
        console.table(result);
        startMenu();
    });
};

function seeEmployees() {
    connection.query(`SELECT * FROM employees`, (err, result) => {
        if (err) {
            console.log(err);
        };
        console.table(result);
        startMenu();
    });
};

function updateRole() {
    connection.query(`SELECT * FROM roles`, (err, result) => {
        if (err) {
            console.log(err)
        };
        console.table(result);
        const chooseRole = result.map(obj => {
            return { 
                name: obj.title,
                value: obj.id
            };
        });
        const updatePrompt = [
            {
            name: "employees",
            type: "input",
            message: "Which employee are you trying to update?"
        },
        {
            name: "roles",
            input: "input",
            message: "What role would you like to give them?"
        }
    ];
    inquirer.prompt(updatePrompt)
        .then((answers) => {
            connection.query(`UPDATE employees SET role_id = ? WHERE id = ?`, [answers.roles, answers.employees], (err, result) => {
                if (err) {
                    console.log(err)
                };
                console.table(result);
                connection.query(`SELECT * FROM employees`, (err, result) => {
                    if (err) {
                        console.log(err)
                    };
                    console.table(result);
                    startMenu();
                });
            });
        });
    });
};

function startMenu() {
    inquirer.prompt(menuPrompt)
        .then((answers) => {
            if (answers.menu === "See Roles") {
                seeRoles();
            } else if (answers.menu === "See Departments") {
                seeDepartments();
            } else if (answers.menu === "See all Employees") {
                seeEmployees();
            } else if (answers.menu === "Add Role") {
                addRole();
            } else if (answers.menu === "Add Department") {
                addDepartment();
            } else if (answers.menu === "Add Employee") {
                addEmployee();
            } else if (answers.menu === "Update Existing Employee") {
                updateRole();
            } 
            else if (answers.menu === "Nevermind") {
                return;
            };
        });
};

// Keep this at the bottom
startMenu();