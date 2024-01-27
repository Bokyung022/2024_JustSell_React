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
          { postal: { [Op.like]: `%${location}%` } },
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
