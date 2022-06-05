USE staff_db;

INSERT INTO departments (name)
VALUES 
    ("Development"),
    ("Music"),
    ("Balance"),
    ("Social Media");
INSERT INTO role (title, salary, department_id)
VALUES
    ("Lead Developer", 50000, 1),
    ("Head of Music", 40000, 2),
    ("Head of Balance", 40000, 3),
    ("Social Media Manager", 20000, 4),
    ("Developer", 15000, 1),
    ("Balance Team Member", 15000, 3)
    ("Beta Tester", 12000, 3),
    ("Music Team Member", 12000, 2),
    ("Social Media Team Member", 10000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Vaughn", "Smith", 1, NULL),
    ("Zack", "Soup", 3, 1),
    ("Jeff", "Home", 2, 1),
    ("Kay", "Cher", 4, 1),
    ("Andy", "Anderson", 5, 1),
    ("Keat", "Home", 8, 2),
    ("Doug", "Doogs", 7, 3),
    ("Arynn", "Ma", 9, 4);

