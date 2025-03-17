import { Injectable } from '@nestjs/common';
import Blog from '../models/Blog';

@Injectable()
export class BlogService {
  allBlogs(): object {
    const getAllBlogs = async () => {
      const blogs = await Blog.find();

      return blogs;
    };

    const blogs = getAllBlogs();
    return {
      ok: true,
      blogs,
    };
  }
}
