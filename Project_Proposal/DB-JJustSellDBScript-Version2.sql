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

-- Drop the schema if it exists
DROP SCHEMA IF EXISTS `justselldb`;

-- -----------------------------------------------------
-- Schema justselldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `justselldb` DEFAULT CHARACTER SET utf8 ;

USE `justselldb` ;

-- -----------------------------------------------------
-- Table `justselldb`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `justselldb`.`roles` (
  `RoleID` INT(11) NOT NULL AUTO_INCREMENT,
  `RoleDescription` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`RoleID`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `justselldb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `justselldb`.`users` (
  `UserID` INT(11) NOT NULL AUTO_INCREMENT,
  `roles_RoleID` INT(11) NOT NULL,
  `Email` VARCHAR(30) NOT NULL,
  `FirstName` VARCHAR(30) NOT NULL,
  `LastName` VARCHAR(30) NOT NULL,
  `Phone` VARCHAR(15) NULL DEFAULT NULL,
  `StreetNum` MEDIUMINT(9) NULL DEFAULT NULL,
  `StreetName` VARCHAR(30) NULL DEFAULT NULL,
  `City` VARCHAR(30) NULL DEFAULT NULL,
  `Province` VARCHAR(30) NULL DEFAULT NULL,
  `Postal` VARCHAR(7) NULL DEFAULT NULL,
  `Company` VARCHAR(45) NULL,
  PRIMARY KEY (`UserID`),
  INDEX `fk_users_roles1_idx` (`roles_RoleID` ASC),
  CONSTRAINT `fk_users_roles1`
    FOREIGN KEY (`roles_RoleID`)
    REFERENCES `justselldb`.`roles` (`RoleID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `justselldb`.`properties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `justselldb`.`properties` (
  `PropertyID` INT(11) NOT NULL AUTO_INCREMENT,
  `users_UserID` INT(11) NOT NULL,
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
  `Size` FLOAT NULL DEFAULT NULL,
  `Furnished` TINYINT(1) NOT NULL DEFAULT '0',
  `PropertyType` VARCHAR(30) NOT NULL DEFAULT 'House',
  `YearOfBuilt` SMALLINT(5) UNSIGNED NOT NULL,
  `Amenities` VARCHAR(100) NOT NULL,
  `SellOption` VARCHAR(30) NOT NULL,
  `ConstructionStatus` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`PropertyID`),
  INDEX `fk_properties_users1_idx` (`users_UserID` ASC),
  CONSTRAINT `fk_properties_users1`
    FOREIGN KEY (`users_UserID`)
    REFERENCES `justselldb`.`users` (`UserID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `justselldb`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `justselldb`.`image` (
  `ImageID` INT(11) NOT NULL AUTO_INCREMENT,
  `properties_PropertyID` INT(11) NOT NULL,
  `ImagePath` VARCHAR(255) NOT NULL,
  `ImageFileName` VARCHAR(255) NOT NULL,
  `Description` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ImageID`),
  INDEX `FK_IM_PR` (`properties_PropertyID` ASC),
  CONSTRAINT `FK_IM_PR`
    FOREIGN KEY (`properties_PropertyID`)
    REFERENCES `justselldb`.`properties` (`PropertyID`))
ENGINE = InnoDB
AUTO_INCREMENT = 607
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `justselldb`.`credentials`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `justselldb`.`credentials` (
  `CredentialID` INT(11) NOT NULL AUTO_INCREMENT,
  `users_UserID` INT(11) NOT NULL,
  `UserName` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`CredentialID`),
  INDEX `fk_credentials_users1_idx` (`users_UserID` ASC),
  CONSTRAINT `fk_credentials_users1`
    FOREIGN KEY (`users_UserID`)
    REFERENCES `justselldb`.`users` (`UserID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8;

credentials
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
