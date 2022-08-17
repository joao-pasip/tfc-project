import { Request, Response } from 'express';
import UserService from '../services/user.service';
// import { ILogin } from '../interfaces/login.interface';

export default class UserController {
  // constructor(private UserService: ILogin) { }

  static async loginController(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await UserService.loginService(email, password);
    return res.status(200).json({ token });
  }
}
