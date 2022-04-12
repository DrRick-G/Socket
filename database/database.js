const mysql = require('mysql');

const dataBase = mysql.createConnection({
    host     : '192.168.64.2',
    user     : 'utilisateur',
    password : '',
    database :'chat'
  });

  module.exports=dataBase;