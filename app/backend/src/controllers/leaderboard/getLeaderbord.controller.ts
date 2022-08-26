import { Request, Response } from 'express';
import Leaderbord from '../../services/leaderboard/getLeaderboard';

export default class GetLeaderbord {
  static async auxRoute(_req: Request, res: Response) {
    const teamsAll = await Leaderbord.performanceTeam();
    return res.status(200).json(teamsAll);
  }
}
