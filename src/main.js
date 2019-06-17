import "./index.css"
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import app from './app.vue'
import router from  './router.js'

var vm=new Vue({
    el:'#app',
    router,
    render:c=>c(app)
})