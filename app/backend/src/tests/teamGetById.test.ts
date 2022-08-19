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


describe('GET/teams/:id', () => {
  
  describe('sucess', () => {
    const mockTeamId1 = {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    };

    afterEach(() => {
      sinon.restore();
    })
    
    it('should return a Team at findOne', async () => {
      sinon.stub(TeamsModel, 'findOne').resolves(mockTeamId1 as TeamsModel);

      const response = await chai.request(app).get('/teams/1').send();
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockTeamId1);
    });

    it('should not return a Team at findOne', async () => {
      sinon.stub(TeamsModel, 'findOne').resolves(null);

      const response = await chai.request(app).get('/teams/1').send();
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ message: 'Team not found' });
    });
  })
});
