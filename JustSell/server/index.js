import crypto from 'crypto';
import dotenv from 'dotenv';
import multer from 'multer';
import { DataTypes, Sequelize } from 'sequelize';
import sharp from 'sharp';

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

dotenv.config();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});


const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  imageName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caption: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

sequelize.sync({ force: false }).then(() => {
  console.log('Database and tables synchronized');
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

app.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({ order: [['created', 'DESC']] });

    for (let post of posts) {
      post.imageUrl = await getObjectSignedUrl(post.imageName);
    }

    res.render('index', { posts });
  } catch (error) {
    console.error('Error retrieving posts:', error);
    res.status(500).send('Internal server error');
  }
});

app.post('/posts', upload.single('image'), async (req, res) => {
  try {
    const file = req.file;
    const caption = req.body.caption;
    const imageName = generateFileName();

    const fileBuffer = await sharp(file.buffer)
      .resize({ height: 1920, width: 1080, fit: "contain" })
      .toBuffer();

    await uploadFile(fileBuffer, imageName, file.mimetype);

    await Post.create({
      imageName,
      caption,
    });

    res.redirect("/");
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send('Internal server error');
  }
});

app.post("/api/deletePost/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    const post = await Post.findByPk(id);

    if (!post) {
      return res.status(404).send('Post not found');
    }

    await deleteFile(post.imageName);
    await post.destroy();

    res.redirect("/");
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).send('Internal server error');
  }
});

const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

// Routers
const propertyRouter = require("./routes/properties");
app.use("/properties", propertyRouter);

db.sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("Server is running on port 8080");
  });
});
