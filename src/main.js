"use strict";
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router/router'
import ElementUI from 'element-ui'
import store from './vuex/store'
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)
Vue.use(VueResource)
Vue.use(ElementUI)
router.afterEach(to =>{
	document.title = to.meta.title;
	var url=to.fullPath;
	//设置导航 子元素 选中
	var newUrl="";
	if(url.indexOf("?")!=-1){
		var len=url.indexOf("?");
		newUrl=url.substring(0,len);
	}else{
		newUrl=url.substring(0,url.length);
	}
	var menuObj=document.getElementsByClassName("childMenu");
	for(var i=0;i<menuObj.length;i++){
		if(menuObj[i].getAttribute("urlname")==newUrl){
			menuObj[i].setAttribute("class","el-menu-item childMenu is-active");
		}else{
			menuObj[i].setAttribute("class","el-menu-item childMenu");
		}
	}
	scrollTo(0,0);
})

const app = new Vue({
	store,
	router,
  	render: h => h(App)
}).$mount('#app');

