module.exports = (sequelize, DataTypes) => {
    const Skills = sequelize.define('skills', {
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
      skill: {
        type: DataTypes.STRING
      }

    });
  
    
  
    return Skills;
  };
  