import { Router } from 'express';
import getLeaderbord from '../../controllers/leaderboard/getLeaderbord.controller';

const leaderboard = Router();

leaderboard.get('/leaderboard', getLeaderbord.auxRoute);
// leaderboard.get('/leaderboard/home', );

export default leaderboard;
