DROP DATABASE IF EXISTS staff_db;
CREATE DATABASE staff_db;

USE staff_db;
CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT,
  FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
);