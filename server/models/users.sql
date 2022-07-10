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