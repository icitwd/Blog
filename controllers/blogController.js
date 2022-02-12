const { AdminUser } = require("../models/AdminUser");
const { Blog } = require("../models/Blog");
const { BlogCategory } = require("../models/BlogCategory");
const { BlogImages } = require("../models/BlogImages");
const { Contact } = require("../models/Contact");

const { body, validationResult } = require('express-validator'); 

class blogController  {

    getAll= function (req, res) {
        Blog.find({}, function (err, foundBlogs) {
            if (!err) {
                res.json(foundBlogs);

            }
            else {
                res.send(err);
            }
        });
    }
   
    add=function (req, res) {
        category_name = req.body.categoryname;

        BlogCategory.find({ Name: category_name }, (err, doc) => {

            if (!err && doc != undefined) {

                try {
                    var newBlog = new Blog({
                        Title: req.body.title,
                        Content: req.body.content,
                        MainImg: req.body.mainImg,
                        BlogCategoryId: doc[0]._id,
                    });
                    newBlog.save((err, data) => {
                        if (!err) {
                            res.status(200).json(data);
                        }
                        else {
                            res.status(500).json(data);
                        }
                    });
                } catch (error) {
                    res.json({ "Category": "cannot found." });
                }

            }
            else {
                res.json({ "Category": "cannot found." });
            }
        });


    }
    

    update=function (req, res) {
        let id = req.body.id;
        Blog.findById(id, (err, doc) => {
            if (!err) {
                doc.Title = req.body.title;
                doc.Content = req.body.content;
                doc.MainImg = req.body.mainimg;
                doc.save();
                res.json(doc);
            }
            else {
                res.status(500).json(err);
            }
        });
    }

    delete=(req,res)=>{
        let blogId = req.body.id 

        Blog.findByIdAndRemove(blogId,(err,doc)=>{
            if(!err){
                res.json(doc) 
            }
            else{
                res.status(500).json(err)
            }
        })
    }
}


module.exports = 
   new blogController()
  


