import models from '../../models';
const Account = models.Account;
const usersAccountController = async (req, res) => {
    try {
        const users = await Account.find();
        return res.status(200).json({
            message: 'All users.',
            status: 'Successful',
            data: users
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `${error}`,
            status: 'Error',
            data: null
        });
    }
    ;
};
export default usersAccountController;
