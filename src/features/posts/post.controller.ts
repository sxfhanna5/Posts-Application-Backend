import { Request, Response } from 'express';
import Boom from '@hapi/boom';
import { PostService } from './post.service';

export class PostController {
  private postService: PostService;
  constructor(postService: PostService) {
    this.postService = postService;
  }

  getPosts = (req: Request, res: Response) => {
    const posts = this.postService.getPosts();
    return res.json(posts);
  };

  createPost = (req: Request, res: Response) => {
    const { imageUrl, title, description } = req.body;

    if (imageUrl === undefined || imageUrl === '') {
      throw Boom.badRequest('imageUrl is required');
    }
    if (title === undefined || title === '') {
      throw Boom.badRequest('title is required');
    }
    if (description === undefined || description === '') {
      throw Boom.badRequest('description is required');
    }

    const post = this.postService.createPost({
      imageUrl,
      title,
      description,
    });

    return res.json(post);
  };

  deletePost = (req: Request, res: Response) => {
    const { id } = req.params;
    this.postService.deletePost(String(id));
    return res.send('Post deleted');
  };
}
