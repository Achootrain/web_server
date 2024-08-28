
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users',{
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
    
    });

    users.associate = function(models) {
      users.hasOne(models.basics, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      users.hasMany(models.awards, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      users.hasMany(models.certificates, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      users.hasMany(models.educations, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      
      users.hasOne(models.interests, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      users.hasOne(models.languages, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      users.hasOne(models.locations, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      users.hasOne(models.profiles, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      users.hasMany(models.projects, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      users.hasMany(models.publications, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      users.hasOne(models.skills, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      users.hasMany(models.volunteers, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      users.hasMany(models.works, {
        foreignKey: "user_id",
        onDelete: "cascade"
      });
      
    users.hasMany(models.project, {
        foreignKey: 'manager_id',
        onDelete: 'CASCADE'
    });
    users.hasMany(models.project_joined, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
    });
    users.hasMany(models.report, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
    });
    users.hasMany(models.comment, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
    });
     
    };


    return users;
  };
  