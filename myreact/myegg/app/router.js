'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);

  router.post('/', controller.wzhome.login);//登录接口

  router.get('/home', controller.wzhome.login);
};
