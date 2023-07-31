import express from 'express';
import { login, register } from '../controllers/authentication';
import { getAllUsers } from '../controllers/users';
import { isAuthenticated } from '../middleware';

const router = express.Router();

router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/users', isAuthenticated, getAllUsers);

export default router;
