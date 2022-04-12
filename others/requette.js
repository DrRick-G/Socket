const dataBase = require("../database/database");

const classRequete = class{
    static Insertion = (ParamIns)=>{
        let {pseudo_User,email_User,pwd_User}=ParamIns;
        let sql ="INSERT INTO `user`(`pseudo`,`pwd`) VALUES (?,?,?);"
        dataBase.query(sql,[pseudo_User,email_User,pwd_User],(err,result)=>{
            if(err){
                console.log('une erreur',err);
                return err
            } else{
                console.log(result);
                return result
            }
        })
    }
    static Search = (ParamRes)=>{
        return new Promise((resolve, reject)=>{
            let sql = "SELECT * FROM `user` WHERE `pseudo_User`=?;"
            dataBase.query(sql,[ParamRes.pseudo],(err,result)=>{
                if(err){
                    console.log('erreur')
                   reject (err)
                } else{
                    resolve (result)
                }
            })
        })
    }
}

module.exports = classRequete;