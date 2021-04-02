// import bodyParser from 'body-parser';
import express from 'express';
var server = express();
//======================= imports ======================
import routers from './routes';
//======================================================
// settings
//middlewares
server.use(express.json());
// routes
server.use('/api', routers);
export default server;
