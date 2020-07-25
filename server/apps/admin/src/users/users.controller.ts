import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';


@Crud({
  model: User   //对于User这个模型，使用增删改查方法
})


@Controller('users')
@ApiTags('用户')
export class UsersController {
  constructor(@InjectModel(User) private readonly model){}  //注入增删改查
}
