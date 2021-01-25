'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);

  router.post('/', controller.wzhome.login);//登录接口

  router.post('/register', controller.wzhome.register);//注册接口

  // 发现页面
  router.get('/found', controller.wushan.found);
  router.get('/fashion', controller.wushan.fashion);
  router.get('/nail', controller.wushan.nail);
  router.get('/shoes', controller.wushan.shoes);
  router.get('/getdetail', controller.wushan.detail);

  router.get('/focus', controller.yanrui.focus);//关注页面
  router.get('/place', controller.yanrui.place);//附近页面

   /* 请求用户基本信息显示页面 */
  router.get('/user', controller.zmhome.index);
  /* 更换背景图片 */
  router.post('/beijing', controller.zmhome.BeiJing);
   /* 更换头像 */
   router.post('/touxiang', controller.zmhome.Touxiang);
};
