CREATE TABLE `photos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(200),
    `boarding_room_id` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`boarding_room_id`) REFERENCES `boarding_rooms`(`id`)
);
