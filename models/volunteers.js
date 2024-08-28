module.exports = (sequelize, DataTypes) => {
    const Volunteer = sequelize.define('volunteers', {
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
      organization: {
        type: DataTypes.STRING
      },
      volunteerPosition: {
        type: DataTypes.STRING
      },
      volunteerWebsite: {
        type: DataTypes.TEXT
      },
      volunteerStartDate: {
        type: DataTypes.DATE
      },
      volunteerEndDate: {
        type: DataTypes.DATE
      },
      volunteerSummary: {
        type: DataTypes.TEXT
      }

    });
  
 
  
    return Volunteer;
  };
  