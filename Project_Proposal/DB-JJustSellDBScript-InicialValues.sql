USE `justselldb` ;
-- SET SQL_SAFE_UPDATES = 0;
-- DELETE FROM `justselldb`.`images`;
-- DELETE FROM `justselldb`.`properties`;
-- DELETE FROM `justselldb`.`users`;
-- SET SQL_SAFE_UPDATES = 0;

-- Resetting the auto-increment counter for the users table
ALTER TABLE `justselldb`.`users` AUTO_INCREMENT = 1;
ALTER TABLE `justselldb`.`properties` AUTO_INCREMENT = 1;

-- Inserting User 1
INSERT INTO `justselldb`.`users` 
(`UserName`, `Password`, `Email`, `FirstName`, `LastName`, `Phone`, `StreetNum`, `StreetName`, `City`, `Province`, `Postal`, `Company`, `Role`, `isRealtorApproved`, `RealtorCertification`) 
VALUES 
('john_doe', 'password123', 'john.doe@example.com', 'John', 'Doe', '+1 (555) 123-4567', 123, 'Maple Street', 'Springfield', 'IL', '62704', NULL, 'Client', 0, NULL);

-- Inserting User 2
INSERT INTO `justselldb`.`users` 
(`UserName`, `Password`, `Email`, `FirstName`, `LastName`, `Phone`, `StreetNum`, `StreetName`, `City`, `Province`, `Postal`, `Company`, `Role`, `isRealtorApproved`, `RealtorCertification`) 
VALUES 
('jane_smith', 'password123', 'jane.smith@example.com', 'Jane', 'Smith', '+1 (555) 987-6543', 456, 'Oak Avenue', 'Riverside', 'CA', '92507', NULL, 'Client', NULL, NULL);

-- Inserting User 3 - REALTOR
INSERT INTO `justselldb`.`users` 
(`UserName`, `Password`, `Email`, `FirstName`, `LastName`, `Phone`, `StreetNum`, `StreetName`, `City`, `Province`, `Postal`, `Company`, `Role`, `isRealtorApproved`, `RealtorCertification`) 
VALUES 
('realtor_mike', 'password123', 'mike.realtor@example.com', 'Mike', 'Doe', '+1 (555) 789-0123', 789, 'Pine Lane', 'Portland', 'OR', '97201', 'Best Realty Group', 'Realtor', 1, 'RE67890');

-- Inserting User 4 - REALTOR
INSERT INTO `justselldb`.`users` 
(`UserName`, `Password`, `Email`, `FirstName`, `LastName`, `Phone`, `StreetNum`, `StreetName`, `City`, `Province`, `Postal`, `Company`, `Role`, `isRealtorApproved`, `RealtorCertification`) 
VALUES 
('realtor_Ann', 'password123', 'Ann.realtor@example.com', 'Ann', 'AnnDoe', '+1 (555) 789-0123', 789, 'Pine Lane', 'Portland', 'OR', '97201', 'Best Realty Group', 'Realtor', 1, 'RE67890');

-- Inserting User 5 - REALTOR
INSERT INTO `justselldb`.`users` 
(`UserName`, `Password`, `Email`, `FirstName`, `LastName`, `Phone`, `StreetNum`, `StreetName`, `City`, `Province`, `Postal`, `Company`, `Role`, `isRealtorApproved`, `RealtorCertification`) 
VALUES 
('realtor_Elizabeth', 'password123', 'Elizabeth.realtor@example.com', 'Elizabeth', 'ElizabethDoe', '+1 (555) 789-0123', 789, 'Pine Lane', 'Portland', 'OR', '97201', 'Best Realty Group', 'Realtor', 1, 'RE67890');


INSERT INTO `justselldb`.`properties` 
(`PropertyID`, `users_UserID`, `StreetNum`, `StreetName`, `City`, `Province`, `Postal`, `Description`, `Price`, `Bathrooms`, `Bedrooms`, `Floors`, `Size`, `Furnished`, `PropertyType`, `YearOfBuilt`, `Amenities`, `SellOption`, `ConstructionStatus`) VALUES
(1, 3, '11', 'Broadway', 'New York', 'NY', 'NY10101', 'Historic apartment in the theater district. A piece of New York history.', 1200000.00, 2, 2, 1, '1234567', 'furnished', 'House', 2020, 'Pool, Sauna, Deck', 'Sale', 'Ready to Move'),
(2, 3, '9401', 'Union St', 'San Francisco', 'CA', 'CA10101', 'Contemporary penthouse with stunning city views. Ideal for urban living.', 1800000.00, 3, 2, 2, '1234567', 'furnished', 'Apartment', 2021, 'Pool, Sauna', 'Resale', 'Ready to Move'),
(3, 4, '604601', 'River Rd', 'Chicago', 'IL', 'IL10101', 'Cozy townhouse near the Chicago River. Perfect for a small family.', 500000.00, 1, 2, 2, '1234567', 'furnished', 'House', 2019, 'Sauna, Deck', 'Leasing', 'Ready to Move'),
(4, 4, 'A0602', 'Garden Ave', 'Chicago', 'IL', 'IL10101', 'Charming bungalow with a spacious garden. A great starter home.', 350000.00, 2, 2, 1, '1234567', 'furnished', 'Apartment', 2000, 'Please contact us', 'Sale', 'Under Construction'),
(5, 5, '11603', 'Lake St', 'Chicago', 'IL', 'IL10101', 'Lakefront condominium with panoramic lake views. Enjoy the city and the water.', 900000.00, 2, 3, 3, '1234567', 'furnished', 'Comercial Building', 2017, 'Pool', 'Resale', 'Under Construction'),
(6, 5, '331', 'Beach Blvd', 'Miami', 'FL', 'FL10101', 'Tropical paradise with a private beach. Escape to your own slice of heaven.', 3500000.00, 4, 5, 2, '1234567', 'furnished', 'Apartment', 2005, 'No Amenities Included', 'Sale', 'Ready to Move');


INSERT INTO `images` (`ImageID`, `properties_PropertyID`, `ImagePath`, `ImageFileName`, `Description`) VALUES
(0101, 01, 'images/PropertiesImages', 'House_01(1).jpg', 'Front'),
(0102, 01, 'images/PropertiesImages', 'House_01(2).jpg','Back'),
(0103, 01, 'images/PropertiesImages', 'House_01(3).jpg','Location'),
(0104, 01, 'images/PropertiesImages', 'House_01(4).jpg','Location'),
(0105, 01, 'images/PropertiesImages', 'House_01(5).jpg','Location'),
(0201, 02, 'images/PropertiesImages', 'Ap_02(1).jpg', 'Front'),
(0202, 02, 'images/PropertiesImages', 'Ap_02(2).jpg','Back'),
(0203, 02, 'images/PropertiesImages', 'Ap_02(3).jpg','Location'),
(0204, 02, 'images/PropertiesImages', 'Ap_02(4).jpg','Location'),
(0205, 02, 'images/PropertiesImages', 'Ap_02(5).jpg','Location'),
(0301, 03, 'images/PropertiesImages', 'House_03(1).jpg', 'Front'),
(0302, 03, 'images/PropertiesImages', 'House_03(2).jpg','Back'),
(0303, 03, 'images/PropertiesImages', 'House_03(3).jpg','Location'),
(0304, 03, 'images/PropertiesImages', 'House_03(4).jpg','Location'),
(0305, 03, 'images/PropertiesImages', 'House_03(5).jpg','Location'),
(0401, 04, 'images/PropertiesImages', 'Ap_04(1).jpg', 'Front'),
(0402, 04, 'images/PropertiesImages', 'Ap_04(2).jpg','Back'),
(0403, 04, 'images/PropertiesImages', 'Ap_04(3).jpg','Location'),
(0404, 04, 'images/PropertiesImages', 'Ap_04(4).jpg','Location'),
(0405, 04, 'images/PropertiesImages', 'Ap_04(5).jpg','Location'),
(0501, 05, 'images/PropertiesImages', 'ComercialBuilding_01(1).jpg', 'Front'),
(0502, 05, 'images/PropertiesImages', 'ComercialBuilding_01(2).jpg','Back'),
(0503, 05, 'images/PropertiesImages', 'ComercialBuilding_01(3).jpg','Location'),
(0504, 05, 'images/PropertiesImages', 'ComercialBuilding_01(4).jpg','Location'),
(0505, 05, 'images/PropertiesImages', 'ComercialBuilding_01(5).jpg','Location'),
(0601, 06, 'images/PropertiesImages', 'Ap_06(1).jpg', 'Front'),
(0602, 06, 'images/PropertiesImages', 'Ap_06(2).jpg','Back'),
(0603, 06, 'images/PropertiesImages', 'Ap_06(3).jpg','Location'),
(0604, 06, 'images/PropertiesImages', 'Ap_06(4).jpg','Location'),
(0605, 06, 'images/PropertiesImages', 'Ap_06(5).jpg','Location'),
(0606, 06, 'images/PropertiesImages', 'Ap_06(6).jpg','Location');




