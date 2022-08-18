import { Router } from 'express';
import UserController from '../../controllers/user.controller';
import LoginSchema from '../../middlewares/schemas/users/login.schema';

const login = Router();

login.post('/login', LoginSchema.login, UserController.loginController);

export default login;
