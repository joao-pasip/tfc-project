import TeamsModel from '../database/models/teams.model';

export interface ILeaderboardHomeAway extends TeamsModel {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}
