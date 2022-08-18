import Jwt from '../utils/jwt';
import UserModel from '../database/models/users.model';
import CustomerError from '../helpers/customer.error';

export default class LoginGetService {
  static async getLogin(token: string) {
    const user = Jwt.verify(token);

    if (!user) throw new CustomerError(400, 'Invalid login token');

    const dbUser = await UserModel.findOne({ where: { email: user.email } });

    if (!dbUser) throw new CustomerError(400, 'User not exists');

    return dbUser.role;
  }
}
