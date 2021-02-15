import Vue from 'vue'
import App from './App.vue'
import Button from 'vant/lib/button';
import VueRouter from 'vue-router'
import 'vant/lib/button/style';
import index from './views/index/index'
import show from './views/show/index'
import VueImgCropper from "vue-img-cropper"
Vue.component(VueImgCropper.name, VueImgCropper)
Vue.use(Button);
Vue.config.productionTip = false
Vue.use(VueRouter)


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
	{
		path: '/', redirect: '/index'
	},
	{ path: '/index', component: index, name: 'index' },
	{ path: '/show', component: show, name: 'show' }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	mode: 'history',
	routes // (缩写) 相当于 routes: routes
})
new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
