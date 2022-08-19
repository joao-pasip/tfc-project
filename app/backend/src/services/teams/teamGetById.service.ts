import TeamsModel from '../../database/models/teams.model';
import CustomerError from '../../helpers/customer.error';

export default class TeamGetByIdService {
  static async findByIdTeam(id: number) {
    const team = await TeamsModel.findOne({ where: { id } });

    if (!team) throw new CustomerError(404, 'Team not found');
    return team;
  }
}
