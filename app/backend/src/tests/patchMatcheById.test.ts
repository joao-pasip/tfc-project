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

describe('PATCH/matches/:id', () => {
  
  describe('sucess', () => {
    const responseMock = {
      message: 'Updated successfully',
    };

    afterEach(() => {
      sinon.restore();
    })
    
    it('should return create Matches', async () => {
      sinon.stub(MatchesModel, 'update').resolves(responseMock as any);

      const response = await chai.request(app).patch('/matches/:id').send(responseMock);
      
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(responseMock);
    });
  })
});
