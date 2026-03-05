import {Router} from 'express';
import { createUser, deleteUser,loginUser } from '../controllers/users.controllers.js';
import validarJWT from '../middlewares/validarTokens.js';

 const router = Router();

router.route('/').post(createUser);
router.route('/:id').delete(validarJWT,deleteUser)
router.route('/login').post(loginUser)
export default router;

    