import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)

import home from './subcom/home.vue'
import message from './subcom/message.vue'
import contacts from './subcom/contacts.vue'
import setting from './subcom/setting.vue'

var router=new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/message',component:message},
        {path:'/contacts',component:contacts},
        {path:'/setting',component:setting},
        {path:'/',redirect:'/home'},
    ]
})
export default router
