
module.exports = (sequelize, DataTypes) => {
    const report = sequelize.define('report', {
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
            }
        },
        project_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'project',
                key: 'id'
            }
        },
        task_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'task',
                key: 'id'
            }
        },
        date: {
            type: DataTypes.DATE
        },
        content:{
            type: DataTypes.TEXT
        },
        description:{
            type: DataTypes.TEXT
        },
        attachment:{
            type: DataTypes.TEXT
        },
        manager_feedback:{
            type: DataTypes.TEXT
        },

       
    }, {
        tableName: 'report', // Set the table name explicitly to 'project'
        timeStamp: false 
    });
    report.associate = function(models) {
        report.belongsTo(models.project, {
            foreignKey: 'project_id',
            onDelete: "cascade"
        });
        report.belongsTo(models.users, {
            foreignKey: 'user_id',
            onDelete: "cascade"
        });
        report.belongsTo(models.task, {
            foreignKey: 'task_id',
            onDelete: "cascade"
        });
        report.hasMany(models.feedback, {
            foreignKey: 'report_id',
            onDelete: "cascade"
        });
    
    }

    return report;
};
