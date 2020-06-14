drop database if exists back_to_mvc;
create database back_to_mvc;

use back_to_mvc;

create table users(
  user_id int primary key not null auto_increment,
  username varchar(32) not null
);

create table posts(
  post_id int primary key not null auto_increment,
  content varchar(140) not null,
  user_id int not null,
  foreign key (user_id) references users(user_id)
);

insert into users
  (user_id, username)
values
  (1, 'jdoe')
;

insert into posts
  (post_id, content, user_id)
values
  (1, 'hello world!!!', 1),
  (2, 'what is an ocean but a multitude of drops?', 1)
;
