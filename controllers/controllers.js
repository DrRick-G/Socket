const {request, response}= require('express')
const dataBase = require('../database/database')
const classRequete = require('../others/requette')


const nomClass = class {
    static UserGet = ((req=request, res=response)=>{
        if(req.session.user){
            res.redirect('/chat')
        } else {
            res.render('connexion.ejs');
        }
    })

    static Chat =((req=request, res=response)=>{
        if(req.session.user){
            res.render('index.ejs')
        } else {
            res.redirect('/')
        }
        
    })

    static Message=((req=request, res=response)=>{
        res.render('chat.ejs')
    })

    static UserPost = ((req=request, res=response)=>{
        classRequete.Search(req.body)
            .then((success) => {
                console.log('Ca passe', success)
                if (success==''){
                    console.log('Koffi')
                    res.render('connexion.ejs')
                } else{
                    let Pseudo = success[0].pseudo_User
                    let idUser = success[0].id
                    req.session.user = idUser;
                    console.log(req.session)
                    res.redirect('/chat')
                }
            } )
            .catch((error)=>{
                console.log('Ca ne passe pas', error)
            })
    })

}

module.exports = nomClass;