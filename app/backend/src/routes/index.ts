import { Router } from 'express';
import login from './login/login.routes';
import teams from './teams/teams.routes';
import matches from './matches/matches.routes';
import leaderboard from './leaderboard/leaderboard.routes';

const route = Router();
route.use(login);
route.use(teams);
route.use(matches);
route.use(leaderboard);

export default route;
