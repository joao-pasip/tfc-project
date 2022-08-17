import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

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
}
