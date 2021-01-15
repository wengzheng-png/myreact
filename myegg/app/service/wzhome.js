const Service = require('egg').Service;
class Servicewz extends Service {
    async login(uid) {
        // console.log(uid);
        const sql = `select * from user where username='${uid.username}' and paswd='${uid.passwd}'`
        const data = await this.app.mysql.query(sql);
        console.log(data);
        if(data[0]==undefined){
            return {code:4004,info:"没有该用户"}
        }else{
            this.ctx.session ={username:uid.username}
            return {code:2000,info:"登录成功"}
            
        }
    }
}
module.exports = Servicewz;