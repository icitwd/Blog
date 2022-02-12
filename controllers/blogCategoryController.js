const { BlogCategory } = require("../models/BlogCategory");


class blogCategoryController  {
    getAll = (req,res)=>{

        BlogCategory.find({},(err,doc)=>{
            if (!err) {
                res.json(doc)
            }
            else{
                res.json(err)
            }
        })
    }

    add =(req,res)=>{
        let newCategory = new BlogCategory({
            name:req.body.name 
        });
       
        newCategory.save((err,data)=>{
            if(!err){
                res.status(200).json(data)
            }
            else{
                res.status(500).json(data)
            }
        })
    }
    update=(req,res)=>{

        let id = req.body.id

        BlogCategory.findById(id,(err,doc1)=>{
            if(!err){
                if(doc1==null || doc1 == undefined){
                    res.json({"Category": "cannot found."})
                }
                else{
                    Blog.find({BlogCategoryId:id},(err,doc2)=>{
                        if(!err){
                           
                            if(doc2==null || doc2==undefined || doc2.length==0){
                                doc1.Name = req.body.Name
                                doc1.save()
                                res.json(doc1)
                            }
                            else{
                                res.json({"Id found": "Please update the blog."});
                            }
                        }
                        else{
                            res.status(500).json(err)
                        }
                    })
                }
            }
            else{
                res.status(500).json({"Id" :"cannot found."})
            }
        })

        
    }
    delete=(req,res)=>{
        
        let id = req.body.id
       
        BlogCategory.findById(id,(err,doc1)=>{
            if(!err){
                
                if(doc1==null || doc1 == undefined){
                    res.json({"Id" :"cannot found."})
                }
                else{
                    Blog.find({BlogCategoryId:id},(err,doc2)=>{
                        if(!err){
                           
                            if(doc2==null || doc2==undefined || doc2.length==0){
                                BlogCategory.findByIdAndRemove(id,(err,doc3)=>{
                                    console.log(doc3);
                                    if(!err){
                                        res.json(doc3)
                                    }
                                    else{
                                        res.status(500).json(err)
                                    }
                                })
                            }
                            else{
                                res.json({"Id found": "Please update the blog."});
                            }
                        }
                        else{
                            res.status(500).json(err)
                        }
                    })
                }
            }
            else{
                res.status(500).json("Id cannot found.")
            }
        })
    }
}


module.exports = 
  
   new blogCategoryController()
