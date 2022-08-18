import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import UserModel from '../database/models/users.model';
import Jwt from '../utils/jwt';
import BcryptService from '../utils/bcrypt';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST/login', () => {
  
  describe('sucess', () => {
    const mockLogin = {
      "email": "admin@admin.com",
	    "password": "secret_admin"
    }

    afterEach(() => {
      sinon.restore();
    })
    
    it('should return token', async () => {
      sinon.stub(UserModel, 'findOne').resolves(mockLogin as UserModel);
      sinon.stub(Jwt, 'generate').returns('token');
      sinon.stub(BcryptService, 'decrypt');

      const response = await chai.request(app).post('/login').send(mockLogin);

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({ token: 'token' });
    });

    it('should not return token', async () => {
      sinon.stub(UserModel, 'findOne').resolves(null);
      const response = await chai.request(app).post('/login').send(mockLogin);

      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password'});
    })
  })
});
