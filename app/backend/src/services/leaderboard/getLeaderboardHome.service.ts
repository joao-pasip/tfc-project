import TeamsModel from '../../database/models/teams.model';
import MatchesModel from '../../database/models/matches.model';
import Home from '../../utils/teamsMatchesPerformancesHome';
import { ILeaderboard } from '../../interfaces/leaderboard.interface';

export default class LeaderbordHome {
  static async performanceTeam() {
    const teamsAll = await TeamsModel.findAll({
      include: [{
        model: MatchesModel, as: 'homeMatches', where: { inProgress: false },
      }],
    }) as ILeaderboard[];
    const leaderboard = teamsAll.map(({ teamName, homeMatches }) => {
      const createLeaderBoard = this.createLeaderbordAll(
        teamName,
        homeMatches as any,
      );
      return createLeaderBoard;
    });
    return this.sortLeaderBoard(leaderboard);
  }

  static createLeaderbordAll(
    name: string,
    homeMatches: ILeaderboard[],
  ) {
    return {
      name,
      totalPoints: Home.totalPointsHome(homeMatches),
      totalGames: Home.totalGamesHome(homeMatches),
      totalVictories: Home.totalVictoriesHome(homeMatches),
      totalDraws: Home.totalDrawHome(homeMatches),
      totalLosses: Home.totalLossesHome(homeMatches),
      goalsFavor: Home.totalGolsProHome(homeMatches),
      goalsOwn: Home.totalGolsContraHome(homeMatches),
      goalsBalance: Home.saldoDeGolsHome(homeMatches),
      efficiency: Home.aproveitamentoHome(homeMatches),
    };
  }

  static sortLeaderBoard(leaderboard: any) {
    return leaderboard.sort((a: any, b: any) => b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || a.goalsOwn - b.goalsOwn);
  }
}
