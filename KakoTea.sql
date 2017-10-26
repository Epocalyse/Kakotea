DROP TABLE Orders;
DROP TABLE Products;
DROP TABLE Users;

CREATE TABLE Users (
	Email varchar(255) NOT NULL PRIMARY KEY,
	Password varchar(255) NOT NULL,
	Address varchar(255) NOT NULL,
	FirstName varchar(255) NOT NULL,
	LastName varchar(255) NOT NULL
);

CREATE TABLE Products (
	ProductID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	ProductName varchar(255) NOT NULL,
	ProductDes varchar(255) NOT NULL,
	ProductPrice int NOT NULL
);

CREATE TABLE Orders (
	OrderNum int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	ProdID int NOT NULL,
	E_mail varchar(255),
	FOREIGN KEY (ProdID) REFERENCES Products(ProductID),
	FOREIGN KEY (E_mail) REFERENCES Users(Email)
);

INSERT INTO Products (ProductName, ProductDes, ProductPrice)
VALUES ('Red Porcelain Tea Set', '', 55.00);

INSERT INTO Products (ProductName, ProductDes, ProductPrice)
VALUES ('Blue Ceramic Tea and Sushi Set', '', 80.00);

INSERT INTO Users (Email, Password, Address, FirstName, LastName)
VALUES ('hello@gmail.com', 'password', '1, 1st Street', 'Slim', 'Shady');

INSERT INTO Orders (ProdID, E_mail)
VALUES (1, 'hello@gmail.com');