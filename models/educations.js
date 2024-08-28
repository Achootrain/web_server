module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define('educations', {
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
      institution: {
        type: DataTypes.STRING
      },
      area: {
        type: DataTypes.STRING
      },
      studyType: {
        type: DataTypes.STRING
      },
      educationStartDate: {
        type: DataTypes.DATE
      },
      educationEndDate: {
        type: DataTypes.DATE
      },
      gpa: {
        type: DataTypes.STRING
      }
     
    });
  
 
  
    return Education;
  };
  