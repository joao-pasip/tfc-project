import { Router } from 'express';
import GetAllMatchesController from '../../controllers/matches/getAllMatches.controller';
import GetQueryMatchesController from '../../controllers/matches/getQueryMatches.controller';

const matches = Router();

matches.get('/matches', GetQueryMatchesController.findQuery);
matches.get('/matches', GetAllMatchesController.findAll);

export default matches;
