const inquirer = require("inquirer");
require("console.table");
const connection = require(".connection");

// Main Menu
const menuPrompt = [{
    name: "menu",
    type: "list",
    message: "How may I help you?",
    choice: ["See Roles", "See Departments", "See all Employees", "Add role", "Add Department", "Add Employee", "Update Existing Employee", "Nevermind..."]
}];

// "Add" Prompts
const addRolePrompt = [
    {
        name: "role",
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

const addDepartmentPrompt = [
    {
        name: "department",
        type: "input",
        message: "What is the department?"
    }
];

const addEmployeePromt = [
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

// Calls
function seeDepartments() {
    connection.query("SELECT * FROM departments", (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
        startMenu();
    });
};

function seeRoles() {
    connection.query("SELECT * FROM roles", (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
        startMenu();
    });
};

function seeEmployees() {
    connection.query("SELECT * FROM employees", (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
        startMenu();
    });
};


// Keep this at the bottom
startMenu();