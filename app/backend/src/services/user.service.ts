import Jwt from '../utils/jwt';
import UserModel from '../database/models/users.model';
import CustomerError from '../helpers/customer.error';
import bcryptService from '../utils/bcrypt';

export default class UserService {
  static async loginService(email: string, password: string) {
    const userLogin = await UserModel.findOne({ where: { email } });

    if (!userLogin) {
      throw new CustomerError(401, 'Incorrect email or password');
    }

    bcryptService.decrypt(password, userLogin.password);

    const token = Jwt.generate({
      email,
      password,
    });
    return token;
  }
}
