const express = require('express');
const { route } = require('express/lib/application');
const { model } = require('mongoose');
const router = express.Router();
const Post = require('../models/Post');


//GETS BACK ALL THE POSTS
router.get('/', async (req,res)=>{
    try{
        const Posts = await Post.find();
        res.json(Posts);

    }
    catch(err){
        res.json({message:err});
    }
});


//SUBMITS A NEW POST
router.post('/', async (req,res) =>{
    
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });
    
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch(err){
        res.json({message:err});
    }
    });


//GETS A SPECIFIC POST
router.get('/:postId', async (req,res) => {
    
    try{
        const post = await Post.findById(req.params.postId);
    res.json(post);
    }
    catch(err){
        res.send({message:err});
        
    }
    
});


//DELETE A SPECIFIC POST
router.delete('/:postId', async (req,res) => {
    
    try{
        const removedPost = await Post.remove({_id : req.params.postId });
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
    });


//UPDATE A POST - PATCH REQUEST
router.patch('/:postId', async (req,res) => {

    try{
        const updatedPost =  await Post.updateOne(
            {_id : req.params.postId},
            { $set: { title: req.body.title }}
            );
        res.json(updatedPost);
        
    }
    catch(err){
        res.json({message:err});
        
    }
   
});


module.exports = router;