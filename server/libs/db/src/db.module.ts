import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose' //4、导入包
import {} from 'mongoose'   //为了让下面的useNewUrlParser能提示
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Episode } from './models/episode.model';

const models = TypegooseModule.forFeature([
  User,
  Course,
  Episode
])   //二、引用User这个类模型

@Global()   //一、把下面的模块标记为全局使用
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://192.168.131.100/topfullstack',{
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }),
    models,   //三，导入这个模型
  ],
  providers: [DbService],
  exports: [DbService,models],    //四、再导出这个模型，这样其他地方就都可以用了
})
export class DbModule {}
