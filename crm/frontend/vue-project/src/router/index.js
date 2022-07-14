import  {createRouter,createWebHistory} from "vue-router";
import homeView from '../App.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[{
        path:"/",
        name:"home",
        component:homeView
    }]
})

export default router;