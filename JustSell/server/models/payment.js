module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define("payment", {
    PaymentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    propertiesPropertyID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  payment.associate = (models) => {
    payment.belongsTo(models.users, { foreignKey: "usersUserID", as: "user" });
    payment.belongsTo(models.properties, {
      foreignKey: "propertiesPropertyID",
      as: "property",
    });
  };
  return payment;
};
