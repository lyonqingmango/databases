CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  /* Describe your table here.*/
  id int not null,
  roomname char not null,
  primary key (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int not null,
  username char not null,
  text_message text not null,
  room_id int not null,
  created_at datetime,
  primary key (id),
  foreign key (room_id) references rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

