import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(
      `App has been started at http://localhost:${process.env.PORT ?? 3000}`,
    );
  });
  await mongoose.connect(
    process.env.MONGO_URI ?? 'mongodb://127.0.0.1/blog_website',
  );
  console.log('MongoDB Connected');
}
bootstrap();
