
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
    id: {
         type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          },
    project_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'project',
          key: 'id'
        }},
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }},
    task_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'task',
        key: 'id'
      }
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },  
    username:{
      type: DataTypes.STRING,
      allowNull: false
    }

    
},{
  tableName: 'comment', // Set the table name explicitly to 'project'
  timeStamp: false // This enables createdAt and updatedAt
});
Comment.associate = function(models) {
    Comment.belongsTo(models.project, {
        foreignKey: 'project_id',
        onDelete: "cascade"
    });
    Comment.belongsTo(models.users, {
        foreignKey: 'user_id',
        onDelete: "cascade"
    });
    Comment.belongsTo(models.task, {
        foreignKey: 'task_id',
        onDelete: "cascade"
    });
    
}
   
    return Comment;
  };
  
