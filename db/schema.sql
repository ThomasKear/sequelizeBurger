CREATE database Burgers_db
	
-- directs the following data to affect the correct database 
USE Burgers_db;

-- creates the table burgers
CREATE TABLE burgers (
		id INT NOT NULL AUTO_INCREMENT,
		burger_name VARCHAR(45) NULL,
		devoured BOOLEAN NOT NULL DEFAULT 0,
		date TIMESTAMP NULL,
		PRIMARY KEY (id)
);