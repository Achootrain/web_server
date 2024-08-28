module.exports = (sequelize, DataTypes) => {
    const Publications = sequelize.define('publications', {
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
      publicationName: {
        type: DataTypes.STRING
      },
      publisher: {
        type: DataTypes.STRING
      },
      releaseDate: {
        type: DataTypes.DATE
      },
      publishedWebsite: {
        type: DataTypes.TEXT
      },
      publicationSummary: {
        type: DataTypes.TEXT
      }

    });
  
  
  
    return Publications;
  };
  