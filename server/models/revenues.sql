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
