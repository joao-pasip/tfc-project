import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { ILogin } from '../interfaces/login.interface';
import CustomerError from '../helpers/customer.error';

export default class Jwt {
  payload: { email: string, password: string };
  static generate(payload: { email: string, password: string }): string {
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'jwt_secret', { expiresIn: '1y' });
    return token;
  }

  static decode(token: string) {
    const login = jwt.decode(token);
    return login;
  }

  static verify(token: string) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'jwt_secret');
      return decoded as ILogin;
    } catch (error) {
      throw new CustomerError(401, 'Token must be a valid token');
    }
  }
}
