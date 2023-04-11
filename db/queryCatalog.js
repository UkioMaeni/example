const db = require('../db/db')
const passHash=require('../service/passwordService')
    module.exports= class QueryCatalog{
    static async createUser(login,pass,nickname){
        const passHashValue =await passHash(pass)
        const search=await db.query('SELECT (login) FROM person where login=$1',[login])
        if(search.rowCount>0){
            console.log('error')
            return {code:10,status:400,message:'Пользователь уже существует'}
        }
        else{
            const newPerson =await db.query(`INSERT INTO person (login, pass, nickname) values ($1,$2,$3) RETURNING *`,[login,passHashValue,nickname])
            return {code:0,status:200,message:'user create'}
        }

    }
    static async getUser(id){
        const person = await db.query('SELECT (login,pass,nickname) FROM person where id=$1',[id])
        return person.rows[0].row
    }
    static async getLocation(title){
        try{
            const currentTime = new Date().toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' }).substring(0,2)
        const time=parseInt(currentTime)>=0&&parseInt(currentTime)<=5?'night':'day'
        const location = await db.query('SELECT * FROM location where typelocation=$1 AND time=$2',[title,time])
        const stack={

        }

        location.rows.forEach(el=>{
            if(!stack[el.typepoint]){
                stack[el.typepoint]={count:1,online:el.online}
            }else{
                stack[el.typepoint].count+=1
                stack[el.typepoint].online+=el.online
            }
        })
        const result=[]
        for (let key in stack){
            result.push({title:key,count:stack[key].count,online:stack[key].online})
        }
        console.log(currentTime.substring(0,2))
        return result
        }catch(e){
           console.log(e)
        }
        
    }
    static async getPoint(title){
        const point = await db.query('SELECT * FROM location where typepoint=$1',[title])
        const result=[]
        point.rows.forEach(el=>{
            result.push({title:el.title,online:el.online})
        })
        console.log(result)
        return result
    }
}
