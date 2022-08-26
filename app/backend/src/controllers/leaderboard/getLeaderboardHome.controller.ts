import { Request, Response } from 'express';
import LeaderbordHome from '../../services/leaderboard/getLeaderboardHome.service';

export default class GetLeaderbordHome {
  static async leaderbordHome(_req: Request, res: Response) {
    const teamsAll = await LeaderbordHome.performanceTeam();
    return res.status(200).json(teamsAll);
  }
}
