module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define("images", {
    imageID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageFileName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isPrimaryPicture: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  images.associate = (models) => {
    images.belongsTo(models.properties, {
      foreignKey: "propertiesPropertyID",
      as: "property",
    });
  };
  return images;
};
