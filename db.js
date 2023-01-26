const POOL = require("pg").Pool; // we got to make an instance of the pool obkject 
const pool = new POOL({
    user: "playabook",
    password: "8896",
    port: 5432,
    host: "localhost",
    database: "crypto"
}) // we now making a new instancew of the pool.

module.exports = pool; //we go to export the pool instance object we use the module .exports to do it.