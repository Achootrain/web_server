module.exports = (sequelize, DataTypes) => {
    const feedback = sequelize.define('feedback', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        feedback: {
            type: DataTypes.TEXT
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        report_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'report',
                key: 'id'
            }
        },
        date: {
            type: DataTypes.DATE
        }
      
    }, {
        tableName: 'feedback', // Set the table name explicitly to 'project'
        timestamps: false, // This enables createdAt and updatedAt

    });
    feedback.associate = function(models) {
        feedback.belongsTo(models.report, {
            foreignKey: 'report_id',
            onDelete: "cascade"});
       
    }
    return feedback;
};
