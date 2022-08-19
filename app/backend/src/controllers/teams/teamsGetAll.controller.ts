import { Request, Response } from 'express';
import TeamsGetAllService from '../../services/teams/teamsGetAll.service';

export default class TeamsGetAllController {
  static async findAllTeams(_req: Request, res:Response) {
    const teams = await TeamsGetAllService.findAllTeams();
    return res.status(200).json(teams);
  }
}
