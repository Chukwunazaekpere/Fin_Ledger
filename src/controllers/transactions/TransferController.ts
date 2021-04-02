import { Request, Response } from 'express';

import models from '../../models';
const Transfer = models.Transfers;


const transferController = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;

    const newInvestment = new Transfer({
        ...data
    })
    try {
        const modelResponse = await newInvestment.increaseInvestment();
        if(typeof(modelResponse) === "string"){
            const message = `${modelResponse}`;
            throw message;
        }

        const saveInvestment = await newInvestment.save();
        return res.status(201).json({
            message: 'Investment was successful',
            status: "Success",
            data: saveInvestment
        })
    } catch (error) {
        return res.status(400).json({
            message: `Investment was unsuccessful.`,
            status: "Error",
            data: `${error}`
        })
    }
}

export default transferController;