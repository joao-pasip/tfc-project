import MatchesModel from '../../database/models/matches.model';

export default class PatchMatchesService {
  static async update(id: number) {
    await MatchesModel.update({ inProgress: false }, { where: { id } });
  }
}
