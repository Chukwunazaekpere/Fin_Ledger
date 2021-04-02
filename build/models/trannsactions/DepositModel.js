import { DataTypes } from 'sequelize';
let Deposit;
export const DepositFactory = (sequelize) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.NUMBER,
            required: true
        },
        transactionId: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    };
    const Deposit = sequelize.define("Deposit", attributes);
    return Deposit;
};
const increaseBalance = async function () {
    const firstname = this.firstname;
    try {
        const user = await User.findOne({ firstname });
        if (user === null) {
            const message = "Unregistered user attempting to make a deposit.";
            throw message;
        }
        const userAccount = await Account.findOne({ user: user._id });
        console.log("userAccount: ", userAccount);
        const previousBalance = Number(userAccount?.balance);
        const depositedAmount = this.amount;
        const newBalance = previousBalance + depositedAmount;
        userAccount['balance'] = newBalance;
        await userAccount.save();
        return true;
    }
    catch (error) {
        return error;
    }
};
