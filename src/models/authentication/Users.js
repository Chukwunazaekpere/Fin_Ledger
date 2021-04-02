import { DataTypes } from 'sequelize';
var User;
export var UserFactory = function (sequelize) {
    var attributes = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_At: {
            type: DataTypes.DATE,
            allowNull: false,
            "default": new Date()
        }
    };
    User = sequelize.define("User", attributes);
};
export default User;
