-- Alex Drogemuller and Hannah Cohen

CREATE TABLE IF NOT EXISTS Products (
	ProductID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	ProductName varchar(255) NOT NULL,
	ProductPrice int NOT NULL
);

CREATE TABLE IF NOT EXISTS Orders (
	OrderNum int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	ProdID int NOT NULL,
	Quantity int NOT NULL,
	PhoneNum varchar(255) NOT NULL,
	Email varchar(255) NOT NULL,
	Address varchar(255) NOT NULL,
	FirstName varchar(255) NOT NULL,
	LastName varchar(255) NOT NULL,
	FOREIGN KEY (ProdID) REFERENCES Products(ProductID)
);

INSERT INTO Products (ProductName, ProductPrice)
VALUES ("Spring Flowers Tea Set", 35.45);

INSERT INTO Products (ProductName, ProductPrice)
VALUES ("Ebony Twin Tea Set", 19.99);

INSERT INTO Products (ProductName, ProductPrice)
VALUES ("Ceramic Sushi and Tea Party Set", 120.00);

INSERT INTO Products (ProductName, ProductPrice)
VALUES ("Blue Ceramic Tea and Sushi Set", 27.99);

INSERT INTO Products (ProductName, ProductPrice)
VALUES ("Traditional Clay Tea Set", 15.00);

INSERT INTO Products (ProductName, ProductPrice)
VALUES ("Red Porcelain Tea Set", 35.99);

INSERT INTO Orders (ProdID, Quantity, PhoneNum, Email, Address, FirstName, LastName)
VALUES (1, 2, 12345678910, "hi@gmail.com", "1 House", "Alex", "Meme");

INSERT INTO Orders (ProdID, Quantity, PhoneNum, Email, Address, FirstName, LastName)
VALUES (4, 3, 12345678910, "hi@gmail.com", "1 House", "Alex", "Meme");