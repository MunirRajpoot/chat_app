import express from 'express';
import { signUp, login,logout } from '../controller/user.controller.js';


const router = express.Router();

router.post('/login', login)
router.post('/signup', signUp)
router.post('/logout', logout)

export default router;