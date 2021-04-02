import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config({ path: "./src/config/config.env" });
const connectDb = async () => {
    console.log('\n\t Initiating DB connection...');
    try {
        const conConfig = { user: (process.env.LEDGER_URI || process.env.LEDGER_URI_LOCAL) };
        const dbConnect = new Pool(conConfig);
        await dbConnect.connect();
        console.log('\n\t DB connected successfully...');
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
    ;
};
export default connectDb;
