import { Request, Response } from 'express';
import GetQueryMatchesService from '../../services/matches/getQueryMatches.service';

export default class GetQueryMatchesController {
  static async findQuery(req: Request, res: Response) {
    const query = req.query.inProgress;
    const queryBoolean = query === 'true';
    const matchesQuery = await GetQueryMatchesService.findQuery(queryBoolean);
    return res.status(200).json(matchesQuery);
  }
}
