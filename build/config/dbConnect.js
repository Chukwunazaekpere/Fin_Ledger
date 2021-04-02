import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: "./src/config/config.env" });
const connectDb = async () => {
    console.log('\n\t Initiating DB connection...');
    try {
        const sequelize = new Sequelize((process.env.LEDGER_URI || process.env.LEDGER_URI_LOCAL), {
            dialect: "postgres"
        });
        await sequelize.authenticate();
        console.log('\n\t DB connected successfully...');
    }
    catch (error) {
        console.error(error.message);
    }
    ;
};
export default connectDb;
