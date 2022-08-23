import { Router } from 'express';
import GetAllMatchesController from '../../controllers/matches/getAllMatches.controller';

const matches = Router();

matches.get('/matches', GetAllMatchesController.findAll);

export default matches;
