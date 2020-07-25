import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule      //把数据库模块导入进来
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
