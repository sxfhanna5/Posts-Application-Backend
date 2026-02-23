import express, { Router } from 'express';
import { NODE_ENV, PORT } from './config';
import { UserRouter } from './features/users/user.router';
import cors from 'cors';
import { UserController } from './features/users/user.controller';
import { errorMiddleware } from './middlewares/errorsMiddleware';
import { UserService } from './features/users/user.service';

const app = express();
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello world!');
});

const apiRouter = Router();
app.use('/api', apiRouter);

const userService = new UserService();

const userController = new UserController(userService);

const userRouter = new UserRouter(userController);
apiRouter.use( userRouter.router);

app.use(errorMiddleware);

if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

export default app;
