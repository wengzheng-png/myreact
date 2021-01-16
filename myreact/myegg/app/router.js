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
};
