import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import CustomerError from '../../../helpers/customer.error';

const msg = 'All fields must be filled';
export default class LoginSchema {
  static login(req: Request, res: Response, next: NextFunction) {
    const loginSchema = Joi.object({
      email: Joi.string().email().empty().required()
        .messages({
          'string.email': 'Invalid email',
          'any.required': msg,
          'string.empty': msg,
        }),
      password: Joi.string().min(6).empty().required()
        .messages({
          'string.min': 'Password must be at least 6 characters long',
          'any.required': msg,
          'string.empty': msg,
        }),
    });

    const { error } = loginSchema.validate(req.body);
    if (error) {
      throw new CustomerError(400, error.message);
    } return next();
  }
}
