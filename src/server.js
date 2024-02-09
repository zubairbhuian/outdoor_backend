
const app =require('./app.js');
const dbConnect = require('./helper/bd_connect.js');
const {serverPort} =require('./utils/secret.js')


app.listen(serverPort,()=>{
    // url log
    console.log(`URL:http://localhost:${serverPort}/`);
    // db conection
    dbConnect();
})