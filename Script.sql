
create database gcpt5;
use gcpt5;

create table user(
	id int not null primary key auto_increment,
    name varchar(50),
    email varchar(50),
    password varchar(50),
    biografia varchar(150),
    gravatar varchar(100),
);

create table foto(
	id int not null primary key auto_increment,
    id_user int,
    url varchar(50),
    descripcion varchar(250),
    foreign key (id_user) references user(id) ON DELETE CASCADE ON UPDATE CASCADE
);

create table album(
	id int not null primary key auto_increment,
    id_user int,
    name varchar(250),
    foreign key (id_user) references user(id) ON DELETE CASCADE ON UPDATE CASCADE
);

create table foto_album(
	id int not null primary key auto_increment,
    id_user int,
    id_foto int,
    foreign key (id_foto) references foto(id) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (id_user) references user(id) ON DELETE CASCADE ON UPDATE CASCADE
);


DROP database gcpt5;
SHOW tables;