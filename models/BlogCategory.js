const mongoose = require('mongoose')
const {Schema} = mongoose 

const blogSchema = new Schema({ 
    Id :String,
    Name:String,
    AddDate : {type: Date, default: Date.now},
    IsDeleted: {type:Boolean ,default: false}
})
const BlogCategory = mongoose.model("BlogCategory",blogSchema)

module.exports = {
    BlogCategory
}