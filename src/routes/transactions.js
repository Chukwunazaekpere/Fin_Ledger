import { Router } from 'express';
import controllers from '../controllers';
var router = Router();
router.post("/deposit", controllers.depositController);
router.get("/account", controllers.accountController);
router.post("/withdrawal", controllers.withdrawalController);
router.post("/transfer", controllers.transferController);
export default router;
