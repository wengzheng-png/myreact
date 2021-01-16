'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {


  async found(){
    const { ctx } = this;
    let res = await this.ctx.service.wushan.found()
    // console.log(res);
    this.ctx.body = res;
  }
  async fashion(){
    const { ctx } = this;
    let res = await this.ctx.service.wushan.fashion()
    this.ctx.body = res;
  }

  async nail() {
    const { ctx } = this;
    let res = await this.ctx.service.wushan.nail()
    this.ctx.body = res;
  } 
  
  async shoes() {
    const { ctx } = this;
    let res = await this.ctx.service.wushan.shoes()
    this.ctx.body = res;
  } 

  // 详情页
  async detail() {
    const { ctx } = this;
    let res = await this.ctx.service.wushan.detail(this.ctx.request.query)
    this.ctx.body = res;
  }
}

module.exports = HomeController;
