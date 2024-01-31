const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const crypto = require("crypto");
const app = express();
require("dotenv").config();
const router = express.Router();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const { images, properties } = require("../models");
const { Op } = require("sequelize");
const { uploadFile, deleteFile, getObjectSignedUrl } = require("../s3");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");
router.get("/:propertyId", async (req, res) => {
  try {
    const images = await images.findAll({
      where: { propertyPropertyID: propertyID },
    });
    for (let image of images) {
      image.imageUrl = await getObjectSignedUrl(image.imageName);
    }
    res.send(images);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const images = await images.findAll({ order: [["createdAt", "DESC"]] });
    for (let image of images) {
      image.imageUrl = await getObjectSignedUrl(image.imageName);
    }
    res.send(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;
    const description = req.body.description;
    const isPrimaryPicture = req.body.isPrimaryPicture;
    const imageName = generateFileName();
    const propertyPropertyID = req.body.propertyID;
    console.log(isPrimaryPicture);
    const fileBuffer = await sharp(file.buffer)
      .resize({ height: 1080, width: 1920, fit: "contain" })
      .toBuffer();

    await uploadFile(fileBuffer, imageName, file.mimetype);

    const image = await images.create({
      imageName,
      description,
      isPrimaryPicture,
      propertyPropertyID,
    });
    if (isPrimaryPicture) {
      await properties.update(
        { imageName: imageName },
        { where: { propertyID: propertyPropertyID } }
      );
      console.log("we are here");
    }
    res.status(201).send(image);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    const image = await images.findByPk(id);

    if (!image) {
      return res.status(404).send({ error: "Image not found" });
    }

    await deleteFile(image.imageName);
    await image.destroy();

    res.send(image);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = router;
