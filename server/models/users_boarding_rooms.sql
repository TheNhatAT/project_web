CREATE TABLE `users_boarding_rooms` (
    `id` INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`),
    `relationship` INT NOT NULL,
    `user_id` INT NOT NULL,
    `boarding_room_id` INT NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
    FOREIGN KEY (`boarding_room_id`) REFERENCES `boarding_rooms`(id)
);