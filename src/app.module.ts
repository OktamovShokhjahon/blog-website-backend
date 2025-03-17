import { Module } from '@nestjs/common';
import { BlogService } from './services/blog.service';
import { BlogController } from './controllers/blog.controller';

@Module({
  imports: [],
  controllers: [BlogController],
  providers: [BlogService],
})
export class AppModule {}
