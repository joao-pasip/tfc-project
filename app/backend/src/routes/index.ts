import { Router } from 'express';
import login from './login/login.routes';
import teams from './teams/teams.routes';

const route = Router();
route.use(login);
route.use(teams);

export default route;
