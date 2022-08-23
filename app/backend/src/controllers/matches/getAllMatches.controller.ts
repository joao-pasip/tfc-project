import { Request, Response } from 'express';
import GetAllMatchesService from '../../services/matches/getAllMatches.service';
import GetQueryMatchesService from '../../services/matches/getQueryMatches.service';

export default class GetAllMatchesController {
  static async findAll(req: Request, res: Response) {
    const query = req.query.inProgress;
    if (query) {
      const queryBoolean = query === 'true';
      const matchesQuery = await GetQueryMatchesService.findQuery(queryBoolean);
      return res.status(200).json(matchesQuery);
    }
    const matches = await GetAllMatchesService.findAll();
    return res.status(200).json(matches);
  }
}
