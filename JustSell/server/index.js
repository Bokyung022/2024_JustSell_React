const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

//Routers
const propertyRouter = require("./routes/properties");
app.use("/properties", propertyRouter);



db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
});




