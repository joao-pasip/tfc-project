import { Router } from 'express';
import GetLeaderbord from '../../controllers/leaderboard/getLeaderbord.controller';
import GetLeaderbordHome from '../../controllers/leaderboard/getLeaderboardHome.controller';
import GetLeaderbordAway from '../../controllers/leaderboard/getLeaderboardAway.controller';

const leaderboard = Router();

leaderboard.get('/leaderboard', GetLeaderbord.auxRoute);
leaderboard.get('/leaderboard/home', GetLeaderbordHome.leaderbordHome);
leaderboard.get('/leaderboard/away', GetLeaderbordAway.findAll);

export default leaderboard;
