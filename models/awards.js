module.exports = (sequelize, DataTypes) => {
    const Awards = sequelize.define('awards', {
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
      title: {
        type: DataTypes.STRING
      },
      date: {
        type: DataTypes.DATE
      },
      awarder: {
        type: DataTypes.STRING
      },
      awardSummary: {
        type: DataTypes.TEXT
      }
    });
   
    return Awards;
  };
  