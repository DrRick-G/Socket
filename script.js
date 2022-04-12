const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const ejs = require('ejs');
const accueil = require('./rooters/root');
const session = require('express-session');
const dataBase = require('./database/database');
const io = new Server(server);
const socket = require('express-socket.io-session')


dataBase.connect((err)=>{
    if(!err){
        console.log('Connexion reussie')
        app.use('/public',express.static('public'))
        app.set('views','./views');
        app.set('veiw engine','ejs')
        app.use(express.json())
        app.use(express.urlencoded({extended:false}))
        app.use(session({
            secret:'secret',
            resave:false,
            saveUninitialized:true,
            cookie:{maxAge:6000000000}
            
        }));
        app.use('/',accueil)
    } else{
        console.log('Echec de connexion à la base de données',err)
    }

});


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        // console.log('message: ' + msg);
      });
  });



server.listen(3000, () => {
  console.log('Lecture sur le Port:3000');
});