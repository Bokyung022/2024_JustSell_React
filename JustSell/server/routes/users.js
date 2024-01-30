//https://www.youtube.com/watch?v=OGGnjBE5qr0&list=PLpPqplz6dKxUaZ630TY1BFIo5nP-_x-nL&index=8&t=1882s
const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await users.create({
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });

    if (!user) return res.json({ error: "User Doesn't Exist" });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.json({ error: "Wrong Username And Password Combination" });

    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantsecret"
    );
    res.json({ token: accessToken, username: username, id: user.id });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

router.get("/basicinfo/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const basicInfo = await users.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    res.json(basicInfo);
  } catch (error) {
    console.error("Error fetching basic info:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
