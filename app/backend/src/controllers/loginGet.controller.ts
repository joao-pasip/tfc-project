import { Request, Response } from 'express';
import LoginGetService from '../services/loginGet.service';

export default class LoginGetController {
  static async loginValidate(req: Request, res: Response) {
    const token = req.headers.authorization;
    const role = await LoginGetService.getLogin(token as string);
    return res.status(200).json({ role });
  }
}
