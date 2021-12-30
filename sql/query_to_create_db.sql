CREATE DATABASE  IF NOT EXISTS `prueba`;
USE `prueba`;

DROP TABLE IF EXISTS `careers`;
CREATE TABLE `careers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descr` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `departments`;
CREATE TABLE `departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descr` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `idCareer` int(11) DEFAULT NULL,
  `idDepartment` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Career_idx` (`idCareer`),
  KEY `FK_Department_idx` (`idDepartment`),
  CONSTRAINT `FK_Career` FOREIGN KEY (`idCareer`) REFERENCES `careers` (`id`),
  CONSTRAINT `FK_Department` FOREIGN KEY (`idDepartment`) REFERENCES `departments` (`id`)
);

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descr` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUser` int(11) NOT NULL,
  `idRole` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_User_idx` (`idUser`),
  KEY `FK_Role_idx` (`idRole`),
  CONSTRAINT `FK_Role` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`),
  CONSTRAINT `FK_User` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`)
);