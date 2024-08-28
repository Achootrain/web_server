module.exports = (sequelize, DataTypes) => {
    const Languages = sequelize.define('languages', {
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
      language: {
        type: DataTypes.STRING
      }
    });

    
    return Languages;
    };
      