module.exports = (sequelize, DataTypes) => {
  const Certificate = sequelize.define('certificates', {
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
    certificateName: {
      type: DataTypes.STRING,
    },
    certificateDate: {
      type: DataTypes.DATE,
    },
    certificateIssuer: {
      type: DataTypes.STRING,
    },
    certificateUrl: {
      type: DataTypes.STRING,
    },

  });

  return Certificate
  };
  