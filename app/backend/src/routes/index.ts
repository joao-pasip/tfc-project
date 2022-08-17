import { Router } from 'express';
import login from './login/login.routes';

const route = Router();
route.use(login);

export default route;
