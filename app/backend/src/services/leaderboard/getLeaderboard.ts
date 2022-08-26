import TeamsModel from '../../database/models/teams.model';
import MatchesModel from '../../database/models/matches.model';
// import { ILeaderboardHomeAway } from '../../interfaces/leaderboardHomeAndAway.interface';
import Home from '../../utils/teamsMatchesPerformancesHome';
import Away from '../../utils/teamsMatchesPerformancesAway';
import { ILeaderboard } from '../../interfaces/leaderboard.interface';

export default class Leaderbord {
  static async performanceTeam() {
    const teamsAll = await TeamsModel.findAll({
      include: [{
        model: MatchesModel, as: 'homeMatches', where: { inProgress: false },
      }, {
        model: MatchesModel, as: 'awayMatches', where: { inProgress: false },
      }],
    }) as ILeaderboard[];
    const leaderboard = teamsAll.map(({ teamName, homeMatches, awayMatches }) => {
      const createLeaderBoard = this.createLeaderbordAll(
        teamName,
        homeMatches as any,
        awayMatches as any,
      );
      return createLeaderBoard;
    });
    return this.sortLeaderBoard(leaderboard);
  }

  static createLeaderbordAll(
    name: string,
    homeMatches: ILeaderboard[],
    awayMatches: ILeaderboard[],
  ) {
    return {
      name,
      totalPoints: Home.totalPointsHome(homeMatches) + Away.totalPointsAway(awayMatches),
      totalGames: Home.totalGamesHome(homeMatches) + Away.totalGamesAway(awayMatches),
      totalVictories: Home.totalVictoriesHome(homeMatches) + Away.totalVictoriesAway(awayMatches),
      totalDraws: Home.totalDrawHome(homeMatches) + Away.totalDrawAway(awayMatches),
      totalLosses: Home.totalLossesHome(homeMatches) + Away.totalLossesAway(awayMatches),
      goalsFavor: Home.totalGolsProHome(homeMatches) + Away.totalGolsProAway(awayMatches),
      goalsOwn: Home.totalGolsContraHome(homeMatches) + Away.totalGolsContraAway(awayMatches),
      goalsBalance: Home.saldoDeGolsHome(homeMatches) + Away.saldoDeGolsAway(awayMatches),
      efficiency: ((((Home.totalPointsHome(homeMatches) + Away.totalPointsAway(awayMatches)
      )) / (((Home.totalGamesHome(homeMatches)
        + Away.totalGamesAway(awayMatches)) * 3))) * 100).toFixed(2),
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
