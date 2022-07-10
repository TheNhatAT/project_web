CREATE TABLE `boarding_rooms` (
     `id` INT NOT NULL AUTO_INCREMENT,
     `name` NVARCHAR(200) NOT NULL,
     `room_price` INT NOT NULL,
     `electricity_price` INT,
     `water_price` INT,
     `parking_price` INT,
     `other_price` INT,
     `area` INT,
     `description` TEXT,
     `category` VARCHAR(200),
     `address` TEXT,
     `created_at` DATETIME,
     `updated_at` DATETIME,
     PRIMARY KEY (`id`)
);