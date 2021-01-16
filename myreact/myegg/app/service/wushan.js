const Service = require('egg').Service;
class FoundService extends Service {

  // 限制条数，可以传入一个值
  async found(uid) {
    const sql=`select * from found order by praise asc`
    const data = await this.app.mysql.query(sql);
    return data;
  }

  async fashion() {
    const sql=`select * from found order by praise desc limit 10`
    const data = await this.app.mysql.query(sql);
    return data;
  }

  async nail() {
    const sql=`select * from found where name like "%美甲%"`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  
  async shoes() {
    const sql=`select * from found where text like "%鞋%"`
    const data = await this.app.mysql.query(sql);
    return data;
  }


  async detail(uid) {
    console.log(uid.id,222222222);
    const sql=`select * from found where id = ${uid.id}`
    const data = await this.app.mysql.query(sql);
    return data;
  }

}
module.exports = FoundService;