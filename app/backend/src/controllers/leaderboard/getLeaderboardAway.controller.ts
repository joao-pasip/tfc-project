import { Request, Response } from 'express';
import LeaderbordAway from '../../services/leaderboard/getLeaderboardAway.service';

export default class GetLeaderbordAway {
  static async findAll(_req: Request, res: Response) {
    const teamsAll = await LeaderbordAway.performanceTeam();
    return res.status(200).json(teamsAll);
  }
}
