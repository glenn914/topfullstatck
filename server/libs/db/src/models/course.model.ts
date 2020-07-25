//存放课程模型
import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import{ ApiProperty } from '@nestjs/swagger'
import { Episode } from './episode.model'


@modelOptions({   //可以在这给schema加属性
  schemaOptions:{
    timestamps: true
  }
})
export class Course {
  @ApiProperty({ description:'课程名称',example: '第一个课程'})
  @prop()
  title: string

  @ApiProperty({ description:'封面', example: '1号封面'})
  @prop()
  cover: string

  @arrayProp({ref: 'Episode'})
  episodes: Ref<Episode>[]
}

