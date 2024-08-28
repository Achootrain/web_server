module.exports = (sequelize, DataTypes) => {
    const Basics = sequelize.define('basics', {
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
      name: {
        type: DataTypes.STRING
      },
      picture: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      degree: {
        type: DataTypes.STRING
      }
    });
    return Basics;
  };
