DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT default 0,
    stock_quantity INT NULL,
    primary key (id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pens", "Office Suppies", 10, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Steno Pads", "Office Suppies", 25, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Thermometer", "Health", 40, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Face Mask", "Health/Safety", 15, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lawn Chair", "Garden/Patio", 50, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Umbrella", "Garen/Patio", 50, 5);