import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import MatchesModel from '../database/models/matches.model';
import TeamsModel from '../database/models/teams.model';

import Jwt from '../utils/jwt';
// import TokenGlobal from '../middlewares/token.global';
import { NextFunction } from 'express';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST/matches', () => {
  
  describe('sucess', () => {
    const responseMock = {
      "id": 49,
      "homeTeam": 16,
      "awayTeam": 8,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
      "inProgress": true
    };

    const mockTeamsEqual = {
      "id": 49,
      "homeTeam": 16,
      "awayTeam": 16,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
      "inProgress": true
    };

    const mockTeamsNotExists = {
      "id": 49,
      "homeTeam": -1,
      "awayTeam": -2,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
      "inProgress": true
    };

    afterEach(() => {
      sinon.restore();
    })
    
    it('should return create Matches', async () => {
      sinon.stub(MatchesModel, 'create').resolves(responseMock as MatchesModel);
      sinon.stub(Jwt, 'verify');

      const response = await chai.request(app).post('/matches').set('authorization', 'token').send(responseMock);
      
      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.deep.equal(responseMock);
    });

    it('should return error at "create" Matches with teams equal', async () => {
      sinon.stub(Jwt, 'verify');

      const response = await chai.request(app).post('/matches').set('authorization', 'token').send(mockTeamsEqual);
      
      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({ message: 'It is not possible to create a match with two equal teams' });
    });

    it('should return error at "create" Matches when teams not exists', async () => {
      sinon.stub(TeamsModel, 'findOne').resolves(null);
      sinon.stub(Jwt, 'verify');

      await chai.request(app).get('/teams').send();
      const response = await chai.request(app).post('/matches').set('authorization', 'token').send(mockTeamsNotExists);
      
      
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ message: 'There is no team with such id!' });
    });
  })
});
