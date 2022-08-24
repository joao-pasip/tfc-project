import { Request, Response } from 'express';
import PatchByIdMatcheService from '../../services/matches/patchByIdMatche.service';

export default class PatchByIdMatcheController {
  static async updateById(req: Request, res: Response) {
    const { id } = req.params;
    const updateMatche = req.body;
    const idMatche = Number(id);
    await PatchByIdMatcheService.updateById(idMatche, updateMatche);
    return res.status(200).json({ message: 'Updated successfully' });
  }
}
