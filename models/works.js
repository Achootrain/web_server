module.exports = (sequelize, DataTypes) => {
    const Work = sequelize.define('works', {
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
      company: {
        type: DataTypes.STRING
      },
      position: {
        type: DataTypes.STRING
      },
      EmployeeWebsite: {
        type: DataTypes.TEXT
      },
      startDate: {
        type: DataTypes.DATE
      },
      endDate: {
        type: DataTypes.DATE
      },
      workSummary: {
        type: DataTypes.TEXT
      }
    });
  
 
    return Work;
  };
  