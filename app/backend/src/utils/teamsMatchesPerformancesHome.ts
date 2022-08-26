import { ILeaderboard } from '../interfaces/leaderboard.interface';

export default class Home {
  static totalPointsHome(performanceTeams: ILeaderboard[]) {
    const getPoints = performanceTeams.reduce((acc: number, homeMatche: any) => {
      if (homeMatche.homeTeamGoals > homeMatche.awayTeamGoals) return acc + 3;
      if (homeMatche.homeTeamGoals === homeMatche.awayTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return getPoints;
  }

  static totalVictoriesHome(performanceTeams: ILeaderboard[]) {
    const victoryQts = performanceTeams.reduce((acc: number, homeMatche: any) => {
      if (homeMatche.homeTeamGoals > homeMatche.awayTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return victoryQts;
  }

  static totalLossesHome(performanceTeams: ILeaderboard[]) {
    const lossesQts = performanceTeams.reduce((acc: number, homeMatche: any) => {
      if (homeMatche.homeTeamGoals < homeMatche.awayTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return lossesQts;
  }

  static totalDrawHome(performanceTeams: ILeaderboard[]) {
    const drawQts = performanceTeams.reduce((acc: number, homeMatche: any) => {
      if (homeMatche.homeTeamGoals === homeMatche.awayTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return drawQts;
  }

  static totalGamesHome(performanceTeams: ILeaderboard[]) {
    const totalGames = this.totalVictoriesHome(performanceTeams)
      + this.totalLossesHome(performanceTeams)
      + this.totalDrawHome(performanceTeams);
    return totalGames;
  }

  static totalGolsProHome(performanceTeams: ILeaderboard[]) {
    const golsPro = performanceTeams.reduce((acc: number, homeMatche: any) =>
      acc + homeMatche.homeTeamGoals, 0);
    return golsPro;
  }

  static totalGolsContraHome(performanceTeams: ILeaderboard[]) {
    const golsContra = performanceTeams.reduce((acc: number, homeMatche: any) =>
      acc + homeMatche.awayTeamGoals, 0);
    return golsContra;
  }

  static saldoDeGolsHome(performanceTeams: ILeaderboard[]) {
    const sg = this.totalGolsProHome(performanceTeams) - this.totalGolsContraHome(performanceTeams);
    return sg;
  }

  static aproveitamentoHome(performanceTeams: ILeaderboard[]) {
    const aproveitamento = (this.totalPointsHome(performanceTeams) / (((
      this.totalVictoriesHome(performanceTeams)
      + this.totalLossesHome(performanceTeams)
      + this.totalDrawHome(performanceTeams)
    ) * 3) * 100)).toFixed(2);
    return aproveitamento;
  }
}
