import  Vue  from "vue";
import VueRouter from 'vue-router'


import router from './router/route'
import Home from "./Home";



Vue.use(VueRouter);


new Vue ({
    el:'#app',
    router,
    template: '<Home/>',
    components: {Home}
})
