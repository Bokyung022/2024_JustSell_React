const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Registration route
router.post(
  '/',
  [
    check('FirstName').not().isEmpty(),
    check('LastName').not().isEmpty(),
    check('Email').isEmail(),
    check('UserName').not().isEmpty(),
    check('Password').isLength({ min: 7 }),
    check('passcomf').custom((value, { req }) => value === req.body.Password),
  ],
  async (req, res) => {
    // Validation logic here
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    // Create a new user in the database
    try {
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
  }
);

module.exports = router;