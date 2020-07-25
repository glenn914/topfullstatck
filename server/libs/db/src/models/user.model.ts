//存放用户的数据模型
import { prop, modelOptions } from '@typegoose/typegoose'
import{ ApiProperty } from '@nestjs/swagger'


@modelOptions({   //可以在这给schema加属性
  schemaOptions:{
    timestamps: true
  }
})
export class User {
  @ApiProperty({ description:'用户名', example: 'username1'})
  @prop()
  username: string

  @ApiProperty({ description:'密码', example: 'password1'})
  @prop()
  password: string
}

