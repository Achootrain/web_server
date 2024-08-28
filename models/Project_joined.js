module.exports = (sequelize, DataTypes) => {
    const Project_joined = sequelize.define('project_joined', {
      manager_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'project',
          key: 'manager_id'
        }},
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'users',
              key: 'id'
            },
          },
        project_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'project',
              key: 'id'
            },}
    },{
        tableName: 'project_joined', // Set the table name explicitly to 'project_joined'
        timestamps: false, // This enables createdAt and updatedAt

    });
    return Project_joined;
  };
  