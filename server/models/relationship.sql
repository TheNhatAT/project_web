ALTER TABLE boarding_rooms
ADD COLUMN photo_id INT;

ALTER TABLE boarding_rooms
ADD COLUMN revenue_id INT;

ALTER TABLE boarding_rooms
ADD COLUMN user_id INT;

ALTER TABLE boarding_rooms
ADD CONSTRAINT FOREIGN KEY (photo_id) REFERENCES photos(id);

ALTER TABLE boarding_rooms
ADD CONSTRAINT FOREIGN KEY (revenue_id) REFERENCES revenues(id);

ALTER TABLE boarding_rooms
ADD CONSTRAINT FOREIGN KEY (user_id) REFERENCES users(id);

alter table users alter column status set default 1;