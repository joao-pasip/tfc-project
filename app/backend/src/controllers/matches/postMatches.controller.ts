import { Request, Response } from 'express';
import PostMatchesService from '../../services/matches/postMatches.service';

export default class PostMatchesController {
  static async create(req: Request, res: Response) {
    const matcheTrue = req.body;
    const matches = await PostMatchesService.create(matcheTrue);
    return res.status(201).json(matches);
  }
}
