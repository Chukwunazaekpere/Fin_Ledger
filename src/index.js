import server from './server';
import dotenv from 'dotenv';
import dbConnect from './config/dbConnect';
dotenv.config();
var PORT = process.env.PORT || 5000;
var main = function () {
    server.listen(PORT, function () {
        dbConnect();
        console.log("\tServer running at port: ", PORT);
    });
};
main();
