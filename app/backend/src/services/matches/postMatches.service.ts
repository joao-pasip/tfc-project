import MatchesModel from '../../database/models/matches.model';
import TeamsModel from '../../database/models/teams.model';
import ICreateMatche from '../../interfaces/createMatche.interface';
import CustomerError from '../../helpers/customer.error';
// import TeamsModel from '../../database/models/teams.model';

export default class PostMatchesService {
  static async create(matcheTrue: ICreateMatche): Promise<ICreateMatche> {
    const newMatche = {
      ...matcheTrue,
      inProgress: true,
    };
    if (matcheTrue.homeTeam === matcheTrue.awayTeam) {
      throw new CustomerError(401, 'It is not possible to create a match with two equal teams');
    }

    const idTeamHome = matcheTrue.homeTeam;
    const idTeamAway = matcheTrue.awayTeam;

    const homeTeam = await TeamsModel.findOne({ where: { id: idTeamHome } });
    const awayTeam = await TeamsModel.findOne({ where: { id: idTeamAway } });

    if (!homeTeam || !awayTeam) {
      throw new CustomerError(401, 'There is no team with such id!');
    }

    const matches = await MatchesModel.create(newMatche);
    return matches;
  }
}
