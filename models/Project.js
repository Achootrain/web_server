module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('project', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        manager_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING,
            notNull: true
        },
        description: {
            type: DataTypes.TEXT
        },
        start_date: {
            type: DataTypes.DATE
        },
        end_date: {
            type: DataTypes.DATE
        },
        url: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING},
        password: {
            type: DataTypes.STRING
        },
        unique_id:{
            type: DataTypes.STRING
        }
      
    }, {
        tableName: 'project', // Set the table name explicitly to 'project'
        timestamps: false, // This enables createdAt and updatedAt

    });
    Project.associate = function(models) {
        Project.hasMany(models.task, {
            foreignKey: 'project_id',
            onDelete: "cascade"
        });
        Project.hasMany(models.report, {
            foreignKey: 'project_id',
            onDelete: "cascade"
        });
        Project.hasMany(models.comment, {
            foreignKey: 'project_id',
            onDelete: "cascade"
        });
        Project.hasMany(models.project_joined, {
            foreignKey: 'project_id',
            onDelete: "cascade"
        });

    }

    return Project;
};
