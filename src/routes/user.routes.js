import {Router} from 'express';
import { createUser, deleteUser,loginUser } from '../controllers/users.controllers.js';

 const router = Router();

router.route('/').post(createUser);
router.route('/:id').delete(deleteUser)
router.route('/login').post(loginUser)
export default router;

    