require('dotenv').config()
const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';

const credentials = {
    mysql: {   
        host     : `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`,
        user     : `${process.env.MYSQL_USER}`,
        password : `${process.env.MYSQL_PASSWORD}`,
        database : `${process.env.MYSQL_DATABASE}`   
    }
}

module.exports = credentials;