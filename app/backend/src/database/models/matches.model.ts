import { Model, DataTypes } from 'sequelize';
import db from '.';
import TeamsModel from './teams.model';
// import OtherModel from './OtherModel';

class MatchesModel extends Model {
  // public <campo>!: <tipo>;
  declare id: number;

  declare teamName: string;

  declare homeTeam: number;

  declare homeTeamGoals: number;

  declare awayTeam: number;

  declare awayTeamGoals: number;

  declare inProgress: boolean;
}

MatchesModel.init({
  // ... Campos
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  homeTeam: {
    // foreignKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team',
    references: { model: TeamsModel, key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  homeTeamGoals: {
    allowNull: false,
    field: 'home_team_goals',
    type: DataTypes.INTEGER,
  },
  awayTeam: {
    // foreignKey: true,
    type: DataTypes.INTEGER,
    field: 'away_team',
    allowNull: false,
    references: { model: TeamsModel, key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  awayTeamGoals: {
    allowNull: false,
    field: 'away_team_goals',
    type: DataTypes.INTEGER,
  },
  inProgress: {
    allowNull: false,
    field: 'in_progress',
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  // ... Outras configs
  underscored: true,
  tableName: 'matches',
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

MatchesModel.belongsTo(TeamsModel, { foreignKey: 'homeTeam', as: 'teamHome' });

MatchesModel.belongsTo(TeamsModel, { foreignKey: 'awayTeam', as: 'teamAway' });

TeamsModel.hasMany(MatchesModel, { foreignKey: 'homeTeam', as: 'teamHome' });

TeamsModel.hasMany(MatchesModel, { foreignKey: 'awayTeam', as: 'teamAway' });

export default MatchesModel;
