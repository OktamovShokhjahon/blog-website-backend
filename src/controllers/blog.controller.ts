import { Controller, Get, Post, Req } from '@nestjs/common';
import { BlogService } from '../services/blog.service';

@Controller('/api/blog')
export class BlogController {
  constructor(private readonly appService: BlogService) {}

  @Get('/all')
  allBlogs(): object {
    return this.appService.allBlogs();
  }
}
