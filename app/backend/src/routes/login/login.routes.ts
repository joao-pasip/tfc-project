import { Router } from 'express';
import UserController from '../../controllers/user.controller';
import LoginSchema from '../../middlewares/schemas/users/login.schema';
// import TokenGlobal from '../../middlewares/token.global';
import LoginGetController from '../../controllers/loginGet.controller';

const login = Router();

login.post('/login', LoginSchema.login, UserController.loginController);
login.get('/login/validate', LoginGetController.loginValidate);

export default login;
