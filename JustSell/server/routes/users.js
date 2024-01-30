//https://www.youtube.com/watch?v=-UKPph5XU_c
const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    const accessToken = sign(
      { username: user.username, id: user.id }, //data to pass to jwt to create the token
      "importantsecret" //should be a ramdon string generator KVP
    );
    res.json({ token: accessToken, username: username, id: user.id }); //returning the access token, if user makes request we use this token to validade the request
  });
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

router.get("/basicinfo/:id", async (req, res) => {
  const id = req.params.id;

  const basicInfo = await Users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });

  res.json(basicInfo);
});

// router.put("/changepassword", validateToken, async (req, res) => {
//   const { oldPassword, newPassword } = req.body;
//   const user = await Users.findOne({ where: { username: req.user.username } });

//   bcrypt.compare(oldPassword, user.password).then(async (match) => {
//     if (!match) res.json({ error: "Wrong Password Entered!" });

//     bcrypt.hash(newPassword, 10).then((hash) => {
//       Users.update(
//         { password: hash },
//         { where: { username: req.user.username } }
//       );
//       res.json("SUCCESS");
//     });
//   });
// });

module.exports = router;
