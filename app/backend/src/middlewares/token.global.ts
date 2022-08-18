// import { Request, Response, NextFunction } from 'express';
// import Jwt from '../utils/jwt';
// import CustomerError from '../helpers/customer.error';

// export default class TokenGlobal {
//   static tokenValidation(req: Request, _res: Response, next: NextFunction) {
//     const token = req.headers.authorization;
//     if (!token) throw new CustomerError(400, 'Token not exists');
//     Jwt.verify(token);
//     return next();
//   }
// }
