import { Router } from 'express';
import GetAllMatchesController from '../../controllers/matches/getAllMatches.controller';
import PostMatchesController from '../../controllers/matches/postMatches.controller';
import PatchMatchesController from '../../controllers/matches/patchMatches.controller';
import PatchByIdMatcheController from '../../controllers/matches/patchByIdMatche.controller';
import TokenGlobal from '../../middlewares/token.global';

const matches = Router();

matches.get('/matches', GetAllMatchesController.findAll);
matches.post('/matches', TokenGlobal.tokenValidation, PostMatchesController.create);
matches.patch('/matches/:id', PatchByIdMatcheController.updateById);
matches.patch('/matches/:id/finish', PatchMatchesController.update);

export default matches;
