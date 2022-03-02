'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, ' + this.app.plugins.flash.name;
  }
}

module.exports = HomeController;
