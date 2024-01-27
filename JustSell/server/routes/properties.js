const express = require("express");
const router = express.Router();
const { properties } = require("../models");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const listOfProperties = await properties.findAll();
  res.json(listOfProperties);
});

router.get("/search", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 3;
    const startIndex = parseInt(req.query.startIndex) || 0;
    const location = req.query.location;
    const propertyType = req.query.propertyType;
    const sellOption = req.query.sellOption;
    const bedrooms = req.query.bedrooms;
    const minBudget = req.query.min;
    const maxBudget = req.query.max;

    let conditions = {};

    if (location) {
      conditions = {
        ...conditions,
        [Op.or]: [
          { city: { [Op.like]: `%${location}%` } },
          { postal: { [Op.like]: `%${location}%` } },
        ],
      };
    }

    if (propertyType) {
      conditions = {
        ...conditions,
        propertyType: propertyType,
      };
    }

    if (sellOption) {
      conditions = {
        ...conditions,
        sellOption: sellOption,
      };
    }

    if (bedrooms) {
      const parsedBedrooms = bedrooms === "6" ? { [Op.gte]: 6 } : bedrooms;
      conditions = {
        ...conditions,
        bedrooms: parsedBedrooms,
      };
    }

    if (minBudget && maxBudget) {
      conditions = {
        ...conditions,
        price: {
          [Op.between]: [minBudget, maxBudget],
        },
      };
    } else if (minBudget) {
      conditions = {
        ...conditions,
        price: {
          [Op.gte]: minBudget,
        },
      };
    } else if (maxBudget) {
      conditions = {
        ...conditions,
        price: {
          [Op.lte]: maxBudget,
        },
      };
    }

    const order = "createdAt";
    const listOfProperties = await properties.findAll({
      where: conditions,
      limit: limit,
      offset: startIndex,
      order: [[order, "ASC"]],
    });

    console.log("List of Properties:", listOfProperties);
    res.json(listOfProperties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/", async (req, res) => {
  const property = req.body;
  await properties.create(property);
  res.json(property);
});

router.get("/byId/:id", async (req, res) => {
  const propertyID = req.params.id;
  const property = await properties.findByPk(propertyID);
  res.json(property);
});

router.delete("/:propertyID", async (req, res) => {
  const propertyID = req.params.propertyID;
  await properties.destroy({
    where: { propertyID: propertyID },
  });
  res.json("Deleted Successfully");
});

module.exports = router;
