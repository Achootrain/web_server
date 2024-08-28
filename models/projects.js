module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('projects', {
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
        projectName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        projectStartDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        projectEndDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        projectDescription: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        projectUrl: {
          type: DataTypes.STRING,
          allowNull: false,
        }

      });
     
      return Project
  };
  