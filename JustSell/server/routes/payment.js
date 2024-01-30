const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const { properties, payment, users } = require("../models");
const Sequelize = require("sequelize");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { v4: uuidv4 } = require("uuid");
router.post("/", async (req, res) => {
  const { property, token } = req.body;
  const idempontencyKey = uuidv4();
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: property.price,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: "down payment",
        },
        idempontencyKey
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

module.exports = router;
