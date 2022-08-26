import { Request, Response } from 'express';
import AuxLeaderbordHome from '../../services/leaderboard/getLeaderboard';

export default class getLeaderbord {
  static async auxRoute(_req: Request, res: Response) {
    const teamsAll = await AuxLeaderbordHome.performanceTeam();
    return res.status(200).json(teamsAll);
  }
}
