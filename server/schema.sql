CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `name` NVARCHAR(200) NOT NULL,
    `auth_token` VARCHAR(10000),
    `address` VARCHAR(200),
    `phone_number` VARCHAR(20),
    `role` INT NOT NULL,
    `avatar` VARCHAR(1000),
    `status` INT NOT NULL,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`));

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

CREATE TABLE `photos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(200),
    `boarding_room_id` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`boarding_room_id`) REFERENCES `boarding_rooms`(`id`)
);


CREATE TABLE `users_boarding_rooms` (
    `id` INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`),
    `relationship` INT NOT NULL,
    `user_id` INT NOT NULL,
    `boarding_room_id` INT NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
    FOREIGN KEY (`boarding_room_id`) REFERENCES `boarding_rooms`(id)
);

CREATE TABLE `revenues` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(100) NOT NULL,
    `month` INT NOT NULL,
    `year` INT NOT NULL,
    `date` INT NOT NULL,
    `boarding_room_id` INT NOT NULL,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`boarding_room_id`) REFERENCES `boarding_rooms`(id)
);

ALTER TABLE boarding_rooms
ADD COLUMN photo_id INT;
ALTER TABLE boarding_rooms
ADD COLUMN revenue_id INT;
ALTER TABLE boarding_rooms
ADD CONSTRAINT FOREIGN KEY (photo_id) REFERENCES photos(id);
ALTER TABLE boarding_rooms
ADD CONSTRAINT FOREIGN KEY (revenue_id) REFERENCES revenues(id);

alter table users alter column status set default 1;