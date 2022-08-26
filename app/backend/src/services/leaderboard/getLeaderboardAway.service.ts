import TeamsModel from '../../database/models/teams.model';
import MatchesModel from '../../database/models/matches.model';
import Away from '../../utils/teamsMatchesPerformancesAway';
import { ILeaderboard } from '../../interfaces/leaderboard.interface';

export default class LeaderbordAway {
  static async performanceTeam() {
    const teamsAll = await TeamsModel.findAll({
      include: [{
        model: MatchesModel, as: 'awayMatches', where: { inProgress: false },
      }],
    }) as ILeaderboard[];
    const leaderboard = teamsAll.map(({ teamName, awayMatches }) => {
      const createLeaderBoard = this.createLeaderbordAll(
        teamName,
        awayMatches as any,
      );
      return createLeaderBoard;
    });
    return this.sortLeaderBoard(leaderboard);
  }

  static createLeaderbordAll(
    name: string,
    awayMatches: ILeaderboard[],
  ) {
    return {
      name,
      totalPoints: Away.totalPointsAway(awayMatches),
      totalGames: Away.totalGamesAway(awayMatches),
      totalVictories: Away.totalVictoriesAway(awayMatches),
      totalDraws: Away.totalDrawAway(awayMatches),
      totalLosses: Away.totalLossesAway(awayMatches),
      goalsFavor: Away.totalGolsProAway(awayMatches),
      goalsOwn: Away.totalGolsContraAway(awayMatches),
      goalsBalance: Away.saldoDeGolsAway(awayMatches),
      efficiency: Away.aproveitamentoAway(awayMatches),
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
