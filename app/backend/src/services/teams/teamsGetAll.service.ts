import TeamsModel from '../../database/models/teams.model';
// import CustomerError from '../../helpers/customer.error';

export default class TeamsGetAllService {
  static async findAllTeams() {
    const teamsAll = await TeamsModel.findAll();

    // if (!teamsAll) throw new CustomerError(404, 'Teams not found');

    return teamsAll;
  }
}
