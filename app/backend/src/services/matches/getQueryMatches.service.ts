import MatchesModel from '../../database/models/matches.model';
import TeamsModel from '../../database/models/teams.model';

export default class GetQueryMatchesService {
  static async findQuery(query: boolean) {
    const matches = await MatchesModel.findAll({
      where: { inProgress: query },
      include: [{
        model: TeamsModel,
        as: 'teamHome',
        attributes: ['teamName'],
      }, {
        model: TeamsModel,
        as: 'teamAway',
        attributes: ['teamName'],
      }],
    });
    return matches;
  }
}
