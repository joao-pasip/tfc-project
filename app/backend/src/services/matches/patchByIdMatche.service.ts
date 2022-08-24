import MatchesModel from '../../database/models/matches.model';
import IPatchMatcheById from '../../interfaces/patchMatcheById.interface';

export default class PatchByIdMatcheService {
  static async updateById(id: number, updateMatche: IPatchMatcheById) {
    await MatchesModel.update({
      homeTeamGoals: updateMatche.homeTeamGoals,
      awayTeamGoals: updateMatche.awayTeamGoals,
    }, { where: { id } });
  }
}
