module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('task', {
      project_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'project',
          key: 'id'
        }},
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
      
      task: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      start_date: {
        type: DataTypes.DATE,
      },
      end_date: {
        type: DataTypes.DATE,
      },
      link: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      
    },
    {
      tableName: 'task', // Set the table name explicitly to 'task'
      timestamps: false, // This enables createdAt and updatedAt

    });
    Task.associate = function(models) {
      Task.hasMany(models.report, {
        foreignKey: 'task_id',
        onDelete: "cascade"
      });
      Task.hasMany(models.comment, {
        foreignKey: 'task_id',
        onDelete: "cascade"
      });
    
    };
   
    return Task;
  };
  