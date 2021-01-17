const Service = require('egg').Service;
class FoundService extends Service {

  async focus() {
    const sql=`select * from focus`
    const data = await this.app.mysql.query(sql);
    return data;
  }


  async place() {
    const sql=`select * from place`
    const data = await this.app.mysql.query(sql);
    return data;
  }

}
module.exports = FoundService;