import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampController } from './controllers/bootcamp.controller';
import { UserController } from './controllers/user.controller';
import { ReviewController } from './controllers/review.controller';
import { CourseController } from './controllers/course.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampController, UserController, ReviewController, CourseController],
  providers: [AppService],
})
export class AppModule {}
