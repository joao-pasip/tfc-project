import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import TeamsModel from '../database/models/teams.model';
import Jwt from '../utils/jwt';
// import TokenGlobal from '../middlewares/token.global';
import { NextFunction } from 'express';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET/teams', () => {
  
  describe('sucess', () => {
    const mockTeams = [
      {
        "id": 1,
        "teamName": "Avaí/Kindermann"
      },
      {
        "id": 2,
        "teamName": "Bahia"
      },
    ];

    afterEach(() => {
      sinon.restore();
    })
    
    it('should return findAll Teams', async () => {
      sinon.stub(TeamsModel, 'findAll').resolves(mockTeams as TeamsModel[]);

      const response = await chai.request(app).get('/teams').send();
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockTeams);
    });
  })
});
