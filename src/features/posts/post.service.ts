import { CreatePostDTO, Post } from './post.types';
import  Boom  from '@hapi/boom';

export class PostService {
  private posts: Post[];
  constructor() {
    this.posts = [];
  }

  getPosts = (): Post[] => {
    return this.posts;
  };

  createPost = (post: CreatePostDTO): Post => {
    const newPost: Post = {
      id: new Date().getTime().toString(),
      imageUrl: post.imageUrl,
      title: post.title,
      description: post.description,
    };
    this.posts.push(newPost);
    return newPost;
  };

  deletePost = (id: string): void => {
    const postFound = this.posts.find((p) => p.id === id);
    if (!postFound) {
      throw Boom.notFound('Post not found');
    }
    this.posts = this.posts.filter((p) => p.id !== id);
  };

}
