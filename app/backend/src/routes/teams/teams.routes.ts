import { Router } from 'express';
import TeamsGetAllController from '../../controllers/teams/teamsGetAll.controller';
import TeamsGetByIdController from '../../controllers/teams/teamGetById.service';

const teams = Router();

teams.get('/teams', TeamsGetAllController.findAllTeams);
teams.get('/teams/:id', TeamsGetByIdController.findByIdTeam);

export default teams;
