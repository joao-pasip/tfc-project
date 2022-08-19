import { Request, Response } from 'express';
import TeamGetByIdService from '../../services/teams/teamGetById.service';

export default class TeamsGetByIdController {
  static async findByIdTeam(req: Request, res:Response) {
    const { id } = req.params;
    const teamId = Number(id);
    const team = await TeamGetByIdService.findByIdTeam(teamId);
    return res.status(200).json(team);
  }
}
