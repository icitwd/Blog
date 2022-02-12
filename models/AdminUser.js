const mongoose = require('mongoose')
const {Schema} = mongoose 

const blogSchema = new Schema({ 
    Id :String,
    EMail:String,
    Password:String,
    LastLoginDate:{type: Date}, 
    AddDate : {type: Date, default: Date.now},
    IsDeleted: {type:Boolean,default: false} 
})
const AdminUser = mongoose.model("adminUser",blogSchema)

module.exports = {
    AdminUser
}