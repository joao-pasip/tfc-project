import { Router } from 'express';
import UserController from '../../controllers/user.controller';

const login = Router();

login.post('/login', UserController.loginController);

export default login;
