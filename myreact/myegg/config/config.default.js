/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606300057304_4405';


  //关闭csrf
  config.security = {
    csrf: {
      enable: false
    }
  }
  // 允许上传文件
  config.multipart = {
    mode: 'file',
    ignoreJSON:true,
  };

  // 跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
}
 
  // 配置数据库
  config.mysql={
    client:{
      //host
      host:"localhost",
      //端口
      port:"3306",
      //用户名
      user:"root",
      //密码
      password:"root",
      //数据库名
      database:"xiaohong"   
    }
  }

   // 配置缓存
   config.session = {
    key: 'HQYJ_SSION',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
