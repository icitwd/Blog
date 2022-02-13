const { AdminUser } = require("../models/AdminUser");
const { BlogModel } = require("../models/Blog");
const { BlogCategory } = require("../models/BlogCategory");
const { BlogImages } = require("../models/BlogImages");
const { Contact } = require("../models/Contact");

class BlogController {
  getAll = function (req, res) {
    BlogModel.find({}, function (err, foundBlogs) {
      if (!err) {
        res.json(foundBlogs);
      } else {
        res.send(err);
      }
    });
  };

  add = function (req, res) {
    console.log(req.body.BlogCategoryId);
    BlogCategory.findById(req.body.BlogCategoryId, (err, doc) => {
      //console.log(doc);
      if (!err && doc != undefined) {
        //console.log(doc);

        let newBlog = new BlogModel({
          Title: req.body.Title,
          Content: req.body.Content,
          MainImg: req.body.mainImg,
          BlogCategoryId: doc._id,
        });
        newBlog.save((err, data) => {
          if (!err) {
            res.status(200).json(data);
          } else {
            res.status(500).json(data);
          }
        });
      } else {
        res.json({ Category: "cannot found." });
      }
    });
  };

  update = function (req, res) {
    let id = req.body.id;
    BlogModel.findById(id, (err, doc) => {
      if (!err) {
        doc.Title = req.body.Title;
        doc.Content = req.body.Content;
        doc.MainImg = req.body.Mainimg;
        doc.save();
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  };

  delete = (req, res) => {
    BlogModel.findByIdAndRemove(req.body.id, (err, doc) => {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  };
}

module.exports = new BlogController();
