DROP DATABASE IF EXISTS staff;
CREATE DATABASE staff;

USE staff;

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT,
  FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
);