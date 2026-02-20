import { Router } from 'express';
import { UserController } from './user.controller';

export class UserRouter {
  public router = Router();
  private userController: UserController;

  constructor(userController?: UserController) {
    this.userController = userController ;
    this.router = Router();
    this.router.get('/users', (req, res) => {
      return res.send('Get users');
    });

    this.router.post('/users', (req, res) => {
      return res.send('Post users');
    });

    this.router.delete('/users/:id', (req, res) => {
        console.log(req.params);
      return res.send('Delete users');
    });

  }
}
