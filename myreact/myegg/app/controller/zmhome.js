'use strict';
//后端  接收service发送过来的数据    业务代码  返回数据给前端  
const Controller = require('egg').Controller;
const fs = require("fs")
class HomeController extends Controller {
  //请求用户基本信息显示页面
  async index() {
    const { ctx } = this;
    var data = this.ctx.request.query;
    // console.log(data,111111)
    ctx.body = await this.ctx.service.zmhome.index(data);
  }
  //更换背景图片
  async BeiJing() {
    const { ctx } = this;
    var newpath = `http://${this.ctx.request.host}/public/src/img/zmimg` ;
    var arg1 = ctx.request.body.username;
    var re = await this.ctx.service.zmhome.BeiJing(arg1, ctx.request.files,newpath);
    ctx.body = re;
  }
  //更换头像
  async Touxiang() {
    const { ctx } = this;
    var newpath = `http://${this.ctx.request.host}/public/src/img/zmimg` ;
    var arg1 = ctx.request.body.username;
    var re = await this.ctx.service.zmhome.Touxiang(arg1, ctx.request.files,newpath);
    ctx.body = re;
  }
}

module.exports = HomeController;


