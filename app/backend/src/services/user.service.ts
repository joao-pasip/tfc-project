import Jwt from '../utils/jwt';
// import UserModel from '../database/models/users.model';

export default class UserService {
  static async loginService(email: string, password: string) {
    // const userLogin = await UserModel.findOne({ where: { email } });

    const token = Jwt.generate({
      email,
      password,
    });

    return token;
  }
}
