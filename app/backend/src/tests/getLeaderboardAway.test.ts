import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import TeamsModel from '../database/models/teams.model';
import { teamsAndAwayMatchesMock, rankingAwayMock } from './mocks/leaderboard.mock';
import { ILeaderboard } from '../interfaces/leaderboard.interface';
import Jwt from '../utils/jwt';
// import TokenGlobal from '../middlewares/token.global';
import { NextFunction } from 'express';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET/leaderboard/away', () => {
  
  describe('sucess', () => {
    afterEach(() => {
      sinon.restore();
    })
    
    it('should return FindAll leaderboardAway', async () => {
      sinon.stub(TeamsModel, 'findAll').resolves(teamsAndAwayMatchesMock as ILeaderboard[]);

      const response = await chai.request(app).get('/leaderboard/away').send();
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(rankingAwayMock);
    });
  })
});
