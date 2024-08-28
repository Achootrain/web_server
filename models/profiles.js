module.exports = (sequelize, DataTypes) => {
    const Profiles = sequelize.define('profiles', {
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
      network: {
        type: DataTypes.STRING
      },
      url: {
        type: DataTypes.TEXT
      }

    });
  
   
  
    return Profiles;
  };
  