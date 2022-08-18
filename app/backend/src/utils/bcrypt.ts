import * as bcrypt from 'bcryptjs';
// import { StatusCodes } from 'http-status-codes';
import CustomerError from '../helpers/customer.error';

export default class bcryptService {
  static encrypt(key: string) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(key, salt);
    return hash;
  }

  static decrypt(key: string, hash: string) {
    const password = bcrypt.compareSync(key, hash) || key === hash;
    if (!password) {
      throw new CustomerError(401, 'Incorrect email or password');
    }
  }
}
