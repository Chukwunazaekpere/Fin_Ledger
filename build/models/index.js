'use strict';
import { TransferFactory } from './trannsactions/TransferModel';
//========================================================
import Sequelize from 'sequelize';
const models = {
    Account: "",
    Withdrawals: "",
    Deposits: "",
    Users: "",
    Transfers: TransferFactory(Sequelize)
};
export default models;
