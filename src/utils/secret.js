require('dotenv').config()

const serverPort =process.env.PORT;
const dbHost =process.env.DB_HOST;
const dbUser =process.env.DB_USER;
const dbPassword =process.env.DB_PASSWORD;
const jwtSecretKey =process.env.JWT_SECRET_KET;



const dbURL=`${dbHost}${dbUser}:${dbPassword}@cluster0.flozhhm.mongodb.net/?retryWrites=true&w=majority`;

module.exports ={serverPort,dbHost,dbUser,dbPassword,dbURL,jwtSecretKey};



