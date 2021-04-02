import { DataTypes } from 'sequelize';
;
export const AccountFactory = (sequelize) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.INTEGER,
            ref: "Users"
        },
        balance: {
            type: DataTypes.INTEGER,
            allownull: false
        },
        transfer: {
            type: DataTypes.INTEGER,
            allownull: false
        },
        availableWithdrawal: {
            type: DataTypes.INTEGER,
            allownull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            default: new Date(),
            allownull: false
        }
    };
    const Account = sequelize.define("Account", attributes);
    return Account;
};
const getBalance = async function () {
    return this.balance;
};
