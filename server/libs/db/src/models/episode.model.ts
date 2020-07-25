import { prop, modelOptions } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";
import { mergeSchemaOptions } from "@typegoose/typegoose/lib/internal/utils";

@modelOptions({
  schemaOptions:{
    timestamps: true
  }
})
export class Episode {
  @ApiProperty({ description:'课时名称',example: '第一集'})
  @prop()
  name: string

  @ApiProperty({ description:'视频',example: '第一个视频文件'})
  @prop()
  file: string
}