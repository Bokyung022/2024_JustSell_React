//https://www.youtube.com/watch?v=OGGnjBE5qr0&list=PLpPqplz6dKxUaZ630TY1BFIo5nP-_x-nL&index=8&t=1882s
const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middleware/AuthMiddleware");
const { sign } = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    const listOfUsers = await users.findAll();
    res.json(listOfUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      userName,
      password,
      email,
      firstName,
      lastName,
      Phone,
      streetNum,
      streetName,
      city,
      province,
      postal,
      company,
      role,
      isRealtorApproved,
      realtorCertification,
    } = req.body;

    const hash = await bcrypt.hash(password, 10);

    await users.create({
      userName,
      password: hash,
      email,
      firstName,
      lastName,
      Phone,
      streetNum,
      streetName,
      city,
      province,
      postal,
      company,
      role,
      isRealtorApproved,
      realtorCertification,
    });

    res.json("SUCCESS");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
