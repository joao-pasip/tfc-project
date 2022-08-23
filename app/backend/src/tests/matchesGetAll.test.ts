import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import MatchesModel from '../database/models/matches.model';
import Jwt from '../utils/jwt';
// import TokenGlobal from '../middlewares/token.global';
import { NextFunction } from 'express';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET/matches', () => {
  
  describe('sucess', () => {
    const mockMatches = [
      {
        "id": 1,
        "homeTeam": 16,
        "homeTeamGoals": 1,
        "awayTeam": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Grêmio"
        }
      },
      {
        "id": 2,
        "homeTeam": 9,
        "homeTeamGoals": 1,
        "awayTeam": 14,
        "awayTeamGoals": 1,
        "inProgress": false,
        "teamHome": {
          "teamName": "Internacional"
        },
        "teamAway": {
          "teamName": "Santos"
        }
      }
    ];

    const mockMatchesTrue = [
      {
        "id": 41,
        "homeTeam": 16,
        "homeTeamGoals": 2,
        "awayTeam": 9,
        "awayTeamGoals": 0,
        "inProgress": true,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Internacional"
        }
      },
      {
        "id": 42,
        "homeTeam": 6,
        "homeTeamGoals": 1,
        "awayTeam": 1,
        "awayTeamGoals": 0,
        "inProgress": true,
        "teamHome": {
          "teamName": "Ferroviária"
        },
        "teamAway": {
          "teamName": "Avaí/Kindermann"
        }
      }
    ];

    afterEach(() => {
      sinon.restore();
    })
    
    it('should return findAll Matches', async () => {
      sinon.stub(MatchesModel, 'findAll').resolves(mockMatches as unknown as MatchesModel[]);

      const response = await chai.request(app).get('/matches').send();
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockMatches);
    });

    it('should return findByQuery Matches inProgress "false"', async () => {
      sinon.stub(MatchesModel, 'findAll').resolves(mockMatches as unknown as MatchesModel[]);

      const response = await chai.request(app).get('/matches').query({ inProgress: false });
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockMatches);
    });

    it('should return findByQuery Matches inProgress "true"', async () => {
      sinon.stub(MatchesModel, 'findAll').resolves(mockMatchesTrue as unknown as MatchesModel[]);

      const response = await chai.request(app).get('/matches').query({ inProgress: true });
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockMatchesTrue);
    });
  })
});
