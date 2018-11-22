import 'es6-promise/auto';
import 'core-js/es7/array'
//pc端：使用路由、图片懒加载、element-ui、服务、组件
import Vue from 'vue'

/*
* 图片懒加载*/
Vue.component('mv-img', require('../marvel/img.vue'));
/*
  1、注册 服务容器 mv-modal
  增加服务的接口
* */

Vue.component('mv-modal', require('../marvel/modal.vue'));


//项目公用的
import '../common/pcbase.css';

export default Vue;
