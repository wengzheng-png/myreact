//控制层
//写后端  发送数据 给  controller 

var Service = require('egg').Service;
var fs = require("fs");
var path = require("path");
class HomeServiceService extends Service {
  //请求用户基本信息显示页面
  async index(data) {
    // console.log(data,111);
    const sql = `select * from user where username='${data.username}'`;
    var data = await this.app.mysql.query(sql);
    return data;
  }
  //修改背景图片
  async BeiJing(arg1, arg2, newpath1) {
    //把数据处理-为sql
    console.log(123358585985522);
    let oldpath = arg2[0].filepath;
    let filename1 = path.basename(oldpath);
    let newpath = __dirname + "/../public/src/img/zmimg/" + filename1;
    let imgpath = newpath1 + '/' + filename1;
    var flag = true;
    fs.copyFileSync(oldpath, newpath, (err) => {
      flag = false;
    });
    if (flag) {
      fs.unlinkSync(oldpath)
    }
    
    const sql = `UPDATE user SET bj1='${imgpath}' WHERE username ='${arg1}'`;
    await this.app.mysql.query(sql);
    const sql1 = `select * from user where username='${arg1}'`;
    var data = await this.app.mysql.query(sql1);
    return data;
  }

  //修改头像
  async Touxiang(arg1, arg2, newpath1) {
    //把数据处理-为sql
    let oldpath = arg2[0].filepath;
    let filename1 = path.basename(oldpath);
    let newpath = __dirname + "/../public/src/img/zmimg/" + filename1;
    let imgpath = newpath1 + '/' + filename1;
    var flag = true;
    fs.copyFileSync(oldpath, newpath, (err) => {
      flag = false;
    });
    if (flag) {
      fs.unlinkSync(oldpath)
    }
    
    const sql = `UPDATE user SET touxiang='${imgpath}' WHERE username ='${arg1}'`;
    await this.app.mysql.query(sql);
    const sql1 = `select * from user where username='${arg1}'`;
    var data = await this.app.mysql.query(sql1);
    return data;
  }
}
module.exports = HomeServiceService;