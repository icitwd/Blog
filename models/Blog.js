const mongoose = require('mongoose')
const {Schema} = mongoose 

const blogSchema = new Schema({ 
    Id :String,
    Title:String,
    Content:String,
    MainImg:String,
    BlogCategoryId: {type: mongoose.Types.ObjectId,
        ref:"BlogCategory"
    },
    AddDate : {type: Date, default: Date.now},
    IsDeleted: {type:Boolean,default: false}
})
const BlogModel = mongoose.model("Blog",blogSchema)

module.exports = {
    BlogModel
}