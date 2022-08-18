import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import UserModel from '../database/models/users.model';
import Jwt from '../utils/jwt';
// import TokenGlobal from '../middlewares/token.global';
import { NextFunction } from 'express';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET/login/validate', () => {
  
  describe('sucess', () => {
    const mockLoginValidation = {
      "email": "admin@admin.com",
	    "password": "secret_admin",
      "role": "admin",
    }

    // beforeEach(() => {
    //   sinon.stub(TokenGlobal, 'tokenValidation').callsFake((_req, _res, next: NextFunction) => next());
    // })

    afterEach(() => {
      sinon.restore();
    })
    
    it('should return role', async () => {
      sinon.stub(UserModel, 'findOne').resolves(mockLoginValidation as UserModel);
      sinon.stub(Jwt, 'verify').returns(mockLoginValidation);

      const response = await chai.request(app).get('/login/validate').set('authorization', 'token');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({ role: mockLoginValidation.role });
    });

    it('should not return role', async () => {
      sinon.stub(UserModel, 'findOne').resolves(null);
      sinon.stub(Jwt, 'verify').resolves(null);

      const response = await chai.request(app).get('/login/validate').set('authorization', 'token');

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ message: 'User not exists'});
    });

    it('should not return role, because not exists token', async () => {
      sinon.stub(Jwt, 'verify');
      sinon.stub(UserModel, 'findOne').resolves(null);
      // sinon.stub(TokenGlobal, 'tokenValidation').callsFake((_req, _res, next: NextFunction) => next());

      const response = await chai.request(app).get('/login/validate');

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ message: 'Invalid login token'});
    })

  })
});
