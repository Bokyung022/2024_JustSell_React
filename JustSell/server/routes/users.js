//https://www.youtube.com/watch?v=OGGnjBE5qr0&list=PLpPqplz6dKxUaZ630TY1BFIo5nP-_x-nL&index=8&t=1882s
const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Ensure password is not empty or undefined
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    // Attempt to hash the password
    const hash = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const hashedPassword = await bcrypt.hash(req.body.Password, 10);
    const user = await User.create({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      UserName: req.body.UserName,
      Password: hashedPassword,
      Phone: req.body.Phone || null,
      StreetNum: req.body.StreetNum || null,
      StreetName: req.body.StreetName || null,
      City: req.body.City || null,
      Province: req.body.Province || null,
      Postal: req.body.Postal || null,
      Company: req.body.Company || null,
      Role: req.body.Role,
      isRealtorApproved: req.body.isRealtorApproved || null,
      RealtorCertification: req.body.RealtorCertification || null,
    });

    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});



router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });

    if (!user) {
      return res.status(404).json({ error: "User Doesn't Exist" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ error: "Wrong Username And Password Combination" });
    }

    res.json({ message: "You logged in successfully" });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
