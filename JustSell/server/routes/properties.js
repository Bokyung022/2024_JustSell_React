const express = require("express");
const router = express.Router();
const { properties } = require("../models");

router.get("/", async (req, res) => {
  const listOfProperties = await properties.findAll();
  res.json(listOfProperties);
});

router.post("/", async (req, res) => {
  const property = req.body;
  await properties.create(property);
  res.json(property);
});

module.exports = router;
