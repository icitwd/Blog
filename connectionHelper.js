const mongoose = require('mongoose');
const { connectionString } = require('./config');


const connectionHelper = {
    connect: () =>{
        mongoose.connect(connectionString)
        .catch(function (err) {
                console.log("Connection Error", err);
            })
    }
}

module.exports = {
    connectionHelper
}