import { Router } from 'express';
import controllers from '../controllers';
var router = Router();
router.use('/register', controllers.registerController);
router.use('/login', controllers.loginController);
router.use('/logout', controllers.logoutController);
export default router;
