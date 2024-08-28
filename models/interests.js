module.exports = (sequelize, DataTypes) => {
    const Interests = sequelize.define('interests', {
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
      interest: {
        type: DataTypes.STRING
      }
    });
  
  
  
    return Interests;
  };
  