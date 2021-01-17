'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async focus() {
    const { ctx } = this;
    let res = await this.ctx.service.yanrui.focus()
    this.ctx.body = res;
  } 
  
  async place() {
    const { ctx } = this;
    let res = await this.ctx.service.yanrui.place()
    this.ctx.body = res;
  } 
}

module.exports = HomeController;
