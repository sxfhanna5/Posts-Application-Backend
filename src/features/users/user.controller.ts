import { Request, Response } from 'express';

export class UserController {
  constructor() {}
  getUsers = (req: Request, res: Response) => {
    return res.send('Get users');
  };

  createUser = (req: Request, res: Response) => {
    return res.send('Post users');
  };

  deleteUser = (req: Request, res: Response) => {
    return res.send('Delete users');
  };
}
