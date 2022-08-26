import { ILeaderboard } from '../interfaces/leaderboard.interface';

export default class Away {
  static totalPointsAway(performanceTeams: ILeaderboard[]) {
    const getPoints = performanceTeams.reduce((acc: number, homeMatche: any) => {
      if (homeMatche.awayTeamGoals > homeMatche.homeTeamGoals) return acc + 3;
      if (homeMatche.awayTeamGoals === homeMatche.homeTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return getPoints;
  }

  static totalVictoriesAway(performanceTeams: ILeaderboard[]) {
    const victoryQts = performanceTeams.reduce((acc: number, homeMatche: any) => {
      if (homeMatche.awayTeamGoals > homeMatche.homeTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return victoryQts;
  }

  static totalLossesAway(performanceTeams: ILeaderboard[]) {
    const lossesQts = performanceTeams.reduce((acc: number, homeMatche: any) => {
      if (homeMatche.awayTeamGoals < homeMatche.homeTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return lossesQts;
  }

  static totalDrawAway(performanceTeams: ILeaderboard[]) {
    const drawQts = performanceTeams.reduce((acc: number, homeMatche: any) => {
      if (homeMatche.awayTeamGoals === homeMatche.homeTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return drawQts;
  }

  static totalGamesAway(performanceTeams: ILeaderboard[]) {
    const totalGames = this.totalVictoriesAway(performanceTeams)
      + this.totalLossesAway(performanceTeams)
      + this.totalDrawAway(performanceTeams);
    return totalGames;
  }

  static totalGolsProAway(performanceTeams: ILeaderboard[]) {
    const golsPro = performanceTeams.reduce((acc: number, homeMatche: any) =>
      acc + homeMatche.awayTeamGoals, 0);
    return golsPro;
  }

  static totalGolsContraAway(performanceTeams: ILeaderboard[]) {
    const golsContra = performanceTeams.reduce((acc: number, homeMatche: any) =>
      acc + homeMatche.homeTeamGoals, 0);
    return golsContra;
  }

  static saldoDeGolsAway(performanceTeams: ILeaderboard[]) {
    const sg = this.totalGolsProAway(performanceTeams) - this.totalGolsContraAway(performanceTeams);
    return sg;
  }

  static aproveitamentoAway(performanceTeams: ILeaderboard[]) {
    const aproveitamento = (this.totalPointsAway(performanceTeams) / (((
      this.totalVictoriesAway(performanceTeams)
      + this.totalLossesAway(performanceTeams)
      + this.totalDrawAway(performanceTeams)
    ) * 3) * 100)).toFixed(2);
    return aproveitamento;
  }
}
