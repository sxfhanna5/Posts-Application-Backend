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
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Backend Post Application</title>
        <style>
          body { background: #fff; color: #222; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
          .msg { font-size: 2rem; font-family: sans-serif; }
        </style>
      </head>
      <body>
        <div class="msg">Backend Post Application is running</div>
      </body>
    </html>
  `);
});


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
