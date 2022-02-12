const mongoose = require('mongoose')
const {Schema} = mongoose 

const blogSchema = new Schema({ 
    Id :String,
    Title:String,
    Message:String,
    AddDate : {type: Date, default: Date.now},
    IsDeleted: {type:Boolean,default: false}
})
const ContactModel = mongoose.model("Contact",blogSchema)

module.exports = {
    ContactModel
}