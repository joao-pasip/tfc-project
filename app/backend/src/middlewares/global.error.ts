import { Request, Response, NextFunction } from 'express';
import CustomerError from '../helpers/customer.error';

class GlobalError {
  defaultStatus;
  constructor(defaultStatus: number) {
    this.defaultStatus = defaultStatus;
    this.handle = this.handle.bind(this);
  }

  handle(error: Error, _req: Request, res: Response, _next: NextFunction) {
    if (error instanceof CustomerError) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(this.defaultStatus).json({ message: error.message });
  }
}

const globalError = new GlobalError(500);

export default globalError;
