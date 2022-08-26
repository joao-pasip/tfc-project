import TeamsModel from '../database/models/teams.model';

export interface ILeaderboard extends TeamsModel{
  id: number,
  team: string;
  homeMatches: {
    id: number;
    homeTeam: number;
    homeTeamGoals: number;
    awayTeam: number;
    awayTeamGoals: number;
    inProgress: boolean;
  }[],
  awayMatches: {
    id: number;
    homeTeam: number;
    homeTeamGoals: number;
    awayTeam: number;
    awayTeamGoals: number;
    inProgress: boolean;
  }[];
}
