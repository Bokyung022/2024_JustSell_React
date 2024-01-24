-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema justselldb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema justselldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `justselldb` DEFAULT CHARACTER SET utf8 ;
USE `justselldb` ;

-- -----------------------------------------------------
-- Table `justselldb`.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `justselldb`.`admins` (
  `AdminID` INT(11) NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(30) NOT NULL,
  `LastName` VARCHAR(30) NOT NULL,
  `Email` VARCHAR(60) NOT NULL,
  `RolePermission` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`AdminID`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `justselldb`.`realtors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `justselldb`.`realtors` (
  `RealtorID` INT(11) NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(30) NOT NULL,
  `LastName` VARCHAR(30) NOT NULL,
  `Phone` VARCHAR(15) NOT NULL,
  `Email` VARCHAR(30) NOT NULL,
  `Company` VARCHAR(45) NOT NULL,
  `RolePermission` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`RealtorID`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `justselldb`.`properties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `justselldb`.`properties` (
  `PropertyID` INT(11) NOT NULL AUTO_INCREMENT,
  `AgentID` INT(11) NOT NULL,
  `StreetNum` MEDIUMINT(8) UNSIGNED NOT NULL,
  `StreetName` VARCHAR(60) NOT NULL,
  `City` VARCHAR(30) NOT NULL,
  `Province` VARCHAR(30) NOT NULL,
  `Postal` VARCHAR(10) NOT NULL,
  `Description` VARCHAR(255) NOT NULL,
  `Price` FLOAT NOT NULL,
  `Bathrooms` TINYINT(3) UNSIGNED NOT NULL DEFAULT '1',
  `Bedrooms` TINYINT(3) UNSIGNED NOT NULL DEFAULT '1',
  `Floors` TINYINT(3) UNSIGNED NOT NULL DEFAULT '1',
  `size` FLOAT NULL DEFAULT NULL,
  `furnished` TINYINT(1) NOT NULL DEFAULT '0',
  `PropertyType` VARCHAR(30) NOT NULL DEFAULT 'House',
  `YearOfBuilt` SMALLINT(5) UNSIGNED NOT NULL,
  `Amenities` VARCHAR(100) NOT NULL,
  `sellOption` VARCHAR(30) NOT NULL,
  `ConstructionStatus` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`PropertyID`),
  INDEX `FK_PRTY_AG` (`AgentID` ASC),
  CONSTRAINT `FK_PRTY_AG`
    FOREIGN KEY (`AgentID`)
    REFERENCES `justselldb`.`realtors` (`RealtorID`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `justselldb`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `justselldb`.`image` (
  `ImageID` INT(11) NOT NULL AUTO_INCREMENT,
  `PropertyID` INT(11) NOT NULL,
  `ImagePath` VARCHAR(255) NOT NULL,
  `ImageFileName` VARCHAR(255) NOT NULL,
  `Description` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ImageID`),
  INDEX `FK_IM_PR` (`PropertyID` ASC),
  CONSTRAINT `FK_IM_PR`
    FOREIGN KEY (`PropertyID`)
    REFERENCES `justselldb`.`properties` (`PropertyID`))
ENGINE = InnoDB
AUTO_INCREMENT = 607
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `justselldb`.`logins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `justselldb`.`logins` (
  `RoleID` INT(11) NOT NULL AUTO_INCREMENT,
  `User` VARCHAR(25) NOT NULL,
  `Realtor` VARCHAR(25) NOT NULL,
  `Admin` VARCHAR(25) NOT NULL DEFAULT '1',
  PRIMARY KEY (`RoleID`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `justselldb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `justselldb`.`users` (
  `UserID` INT(11) NOT NULL AUTO_INCREMENT,
  `Email` VARCHAR(30) NOT NULL,
  `FirstName` VARCHAR(30) NOT NULL,
  `LastName` VARCHAR(30) NOT NULL,
  `Phone` VARCHAR(15) NULL DEFAULT NULL,
  `StreetNum` MEDIUMINT(9) NULL DEFAULT NULL,
  `StreetName` VARCHAR(30) NULL DEFAULT NULL,
  `City` VARCHAR(30) NULL DEFAULT NULL,
  `Province` VARCHAR(30) NULL DEFAULT NULL,
  `Postal` VARCHAR(7) NULL DEFAULT NULL,
  `RolePermission` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`UserID`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
