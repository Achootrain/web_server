module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('locations', {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
      },
      address: {
        type: DataTypes.TEXT
      },
      postal_code: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      country_code: {
        type: DataTypes.STRING
      }

    });
  
  
    return Location;
  };
  