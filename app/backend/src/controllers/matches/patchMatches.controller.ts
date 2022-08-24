import { Request, Response } from 'express';
import PatchMatchesService from '../../services/matches/patchMatches.service';

export default class PatchMatchesController {
  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const idMatches = Number(id);
    await PatchMatchesService.update(idMatches);
    return res.status(200).json({ message: 'Finished' });
  }
}
