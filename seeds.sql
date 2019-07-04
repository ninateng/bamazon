

DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NULL,
    department_name VARCHAR (100) NULL,
    price DECIMAL (10,4) NULL,
    stock_quantity INTEGER(150),
    PRIMARY KEY (item_id)
);


INSERT INTO products ( product_name, department_name,price, stock_quantity)
VALUES ("Dog brush","Pet-Grooming",5,100);

INSERT INTO products ( product_name, department_name,price, stock_quantity)
VALUES ("Cat brush","Pet-Grooming",5,100);

INSERT INTO products ( product_name, department_name,price, stock_quantity)
VALUES ("Hair brush","Grooming",10,100);

INSERT INTO products ( product_name, department_name,price, stock_quantity)
VALUES ("Hair pins","Grooming",3,100);

INSERT INTO products ( product_name, department_name,price, stock_quantity)
VALUES ("Crop cold shoulder blouse: RED","Women-Clothing",12,100);

INSERT INTO products ( product_name, department_name,price, stock_quantity)
VALUES ("Crop cold shoulder blouse: BLUE","Women-Clothing",12,100);

INSERT INTO products ( product_name, department_name,price, stock_quantity)
VALUES ("Flamingo button up: WHITE","Mens-Clothing",15,100);

INSERT INTO products ( product_name, department_name,price, stock_quantity)
VALUES ("Floral button up: NAVY","Mens-Clothing",15,100);

INSERT INTO products ( product_name, department_name,price, stock_quantity)
VALUES ("Chelsea Boot: BEIGE","Mens-Shoes",40,100);

INSERT INTO products ( product_name, department_name,price, stock_quantity)
VALUES ("Clear pointed heels","Womens-Shoes",25,100);

INSERT INTO products ( product_name, department_name,price, stock_quantity)
VALUES ("Duo sponge 6 pack","Cleaning-Supplies",6,100);