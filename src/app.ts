import express, { Router } from 'express';
import { NODE_ENV, PORT } from './config';
import { PostRouter } from './features/posts/post.router';
import cors from 'cors';
import { PostController } from './features/posts/post.controller';
import { errorMiddleware } from './middlewares/errorsMiddleware';
import { PostService } from './features/posts/post.service';

const app = express();
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello world!');
});

// API routes mounted directly on the app (no '/api' prefix)
// previously we used an intermediate router under '/api', which required
// the frontend to prepend '/api' to every request. Simplifying keeps the
// contract closer to the workshop description.

const postService = new PostService();
const postController = new PostController(postService);
const postRouter = new PostRouter(postController);
app.use(postRouter.router);

app.use(errorMiddleware);

if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

export default app;
