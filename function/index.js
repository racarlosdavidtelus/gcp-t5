const functions = require('@google-cloud/functions-framework');
const escapeHtml = require('escape-html');
const pool = require('./databases_connections/mysql_connection');

/* HTTP Cloud Function.
functions.http('userHttp', (req, res) => {
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
});
*/
functions.http('loginHttp', function(req, res) {
  const {user,password}=req.body;
  const email = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
  const isEmail = email.exec(user);
  let query="";
  if (!isEmail) {
    query = "SELECT * FROM user WHERE name=?;"
    console.log('El usuario quiere ingresar con nombre: ' + user);
  } else {
    query = "SELECT * FROM user WHERE email=?;"
    console.log('El usuario quiere ingresar con correo: ' + user);
  }
  try {
      // verificando correo 
      pool.query(query, [user], function(err,result){
          if (err) throw err;
          if (result.length > 0) {
              const data = result[0];
              const SavePassword = data.password;
              const RecivedPassword = password;
              //console.log(data)
              if (SavePassword==RecivedPassword) {
                  res.status(200).json({msj:data, error: null});
              } else {
                  res.status(401).json({msj:'Incorrect password', error: true}); 
              }
          }else{
              res.status(404).json({msj:'User not found in database', error: true}); 
          }
      });
  } catch (er) {
      //console.log(er);
      res.status(404).json({msj:'User not found in database', error:er});
  }
});