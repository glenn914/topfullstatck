import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Main from '../views/Main.vue'
// import CourseList from '../views/courses/CourseList.vue'
// import CourseEdit from '../views/courses/CourseEdit.vue'
import CourseCrud from '../views/courses/CourseCrud.vue'



Vue.use(VueRouter)

  const routes: RouteConfig[] = [   //routes后面加上类型: RouteConfig[]下面的children就有提示了yo
  {
    path: '/',
    component: Main,
    children: [
      {name: 'home', path: '/', component: Home},
      {name: 'course-crud', path: '/courses/list', component: CourseCrud},
      // {name: 'course-list', path: '/courses/list', component: CourseList},
      // {name: 'course-edit', path: '/courses/edit/:id', component: CourseEdit, props:true},
      // {name: 'course-create', path: '/courses/create', component: CourseEdit}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
