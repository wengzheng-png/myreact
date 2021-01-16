'use strict';

const Controller = require('egg').Controller;

class HomeControllerwz extends Controller {
  async login() {
    const { ctx } = this;

    this.ctx.body = await this.ctx.service.wzhome.login(this.ctx.request.body);
  }
}

module.exports = HomeControllerwz;
