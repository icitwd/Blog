const mongoose = require('mongoose')
const {Schema} = mongoose 

const blogSchema = new Schema({ 
    Id :String,
    Path:String,
    BlogId:String, 
    AddDate : {type: Date, default: Date.now},
    IsDeleted: {type:Boolean,default: false}
})
const BlogImages = mongoose.model("BlogImages",blogSchema)

module.exports = {
    BlogImages
}