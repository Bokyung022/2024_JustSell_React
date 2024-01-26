const express = require("express");
const router = express.Router();
const { properties } = require("../models");

router.get("/", async (req, res) => {
  const listOfProperties = await properties.findAll();
  res.json(listOfProperties);
});

router.get("/search", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 3;
    const startIndex = parseInt(req.query.startIndex) || 0;
    let location = req.query.location;
    let propertyType = req.query.propertyType;
    let sellOption = req.query.sellOption;
    let bedrooms = req.query.bedrooms;
    let minBudget = req.query.min;
    let maxBudget = req.query.max;
    let conditions = {};
    if (location) {
      conditions = {
        ...conditions,
        [Op.or]: [
          { city: { [Op.like]: `%${location}%` } },
          { postalCode: { [Op.like]: `%${location}%` } },
        ],
      };
    }

    if (propertyType) {
      conditions = {
        ...conditions,
        PropertyType: propertyType,
      };
    }

    if (sellOption) {
      conditions = {
        ...conditions,
        sellOption: sellOption,
      };
    }

    if (bedrooms) {
      if (bedrooms === "6") {
        conditions = {
          ...conditions,
          bedrooms: {
            [Sequelize.Op.gte]: 6,
          },
        };
      } else {
        conditions = {
          ...conditions,
          bedrooms: bedrooms,
        };
      }
    }

    if (minBudget && maxBudget) {
      conditions = {
        ...conditions,
        price: {
          [Sequelize.Op.between]: [minBudget, maxBudget],
        },
      };
    } else if (minBudget) {
      conditions = {
        ...conditions,
        price: {
          [Sequelize.Op.gte]: minBudget,
        },
      };
    } else if (maxBudget) {
      conditions = {
        ...conditions,
        price: {
          [Sequelize.Op.lte]: maxBudget,
        },
      };
    }
    const listOfProperties = await properties.findAll({
      where: conditions,
      limit: limit,
      offset: startIndex,
    });
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

module.exports = router;
