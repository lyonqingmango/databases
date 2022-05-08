CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  id int(11) not null AUTO_INCREMENT,
  username varchar(25) not null,
  primary key (id)
);

-- CREATE TABLE rooms (
--   /* Describe your table here.*/
--   id int(11) not null AUTO_INCREMENT,
--   roomname varchar(25) not null,
--   primary key (id)
-- );

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   id int(11) not null AUTO_INCREMENT,
--   user_id int(11) not null,
--   text_message varchar(255) not null,
--   room_id int(11) not null,
--   created_at datetime,
--   primary key (id),
--   foreign key (room_id) references rooms(id),
--   foreign key (user_id) references users(id)
-- );

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(11) not null AUTO_INCREMENT,
  userid int(11) not null,
  text varchar(255) not null,
  roomname varchar(25) not null,
  primary key (id),
  foreign key (userid) references users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

