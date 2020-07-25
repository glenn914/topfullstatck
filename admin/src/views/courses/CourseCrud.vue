<template>
  <div>
  <avue-crud :data="data.data" 
  :option= "option"
  @row-save= "create"
  @row-update= "update"
  @row-del = "remove"
  ></avue-crud>
  </div>
</template>

<script lang= "ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({})
export default class CourseList extends Vue {
  data = {}

  option = {
    column: [
      {prop:"title", label: "课程名称"},
      {prop:"cover", label: "课程封面"},
    ]
  }

  async create (row:any,done:any,loading:any ){
    await this.$http.post('courses', row)
    this.$message.success("创建成功")
    this.fetch()
    done()
    loading()
  }

  async update (row:any,index:any,done:any,loading:any){
    const data = JSON.parse(JSON.stringify(row))
    delete data.$index
    await this.$http.put(`courses/${row._id}`,data)
    this.$message.success("更新成功")
    this.fetch()
    done()
    loading()
  }

  async remove(row:any){
    // await this.$confirm("是否确认删除？")
    try {
      await this.$confirm("是否确认删除？")
    }catch (e) {
      return
    }
    await this.$http.delete(`courses/${row._id}`)
    this.$message.success('删除成功')
    this.fetch()
  }

  async fetch(){
    const res = await this.$http.get('courses')
    this.data = res.data
  }

  created(){
    this.fetch()
  }
}
</script>

<style>

</style>