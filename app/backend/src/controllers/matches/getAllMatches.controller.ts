import { Request, Response } from 'express';
import GetAllMatchesService from '../../services/matches/getAllMatches.service';

export default class GetAllMatchesController {
  static async findAll(_req: Request, res: Response) {
    const matches = await GetAllMatchesService.findAll();
    return res.status(200).json(matches);
  }
}
