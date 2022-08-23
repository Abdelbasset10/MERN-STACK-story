const { findByIdAndUpdate } = require('../models/PostModel');
const PostModel = require('../models/PostModel')

const getAllPosts = async (req,res) => {
    try {
        const allPosts = await PostModel.find({})
        res.status(200).json(allPosts)
    } catch (error) {
        console.log(error);
    }
}

const createPost = async (req,res) => {
    try {
        const {title,message,creator,tags,selectedFile} = req.body
        const newPost = new PostModel({
            title,message,creator,tags,selectedFile
        })
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        console.log(error);
    }
}

const updatePost = async (req,res) => {
    try {
        const {id} = req.params
        const getAndUpdate = await PostModel.findByIdAndUpdate(id,req.body,{new:true})
        if(!getAndUpdate){
            res.status(404).json({message:'there is no post with that id '})
        }
        res.status(200).json({message:'your update has been succsefully'})
    } catch (error) {
        console.log(error);
    }
}

const deletePost = async (req,res) => {
    try {
        const {id} = req.params
        const removedPost =await PostModel.findByIdAndDelete(id)
        if(!removedPost){
            res.status(404).json({message:'there is no post with that id '})
        }
        res.status(200).json({message:'your post has been deleted succsefully'})
    } catch (error) {
        console.log(error);
    }
}

const likePost = async (req,res) => {
    try {
        const {id} = req.params
        const post = await PostModel.findById(id)
        if(!post){
            res.status(404).json({message:'there is no post with that id '})
        }
        const postLike = await PostModel.findByIdAndUpdate(id,{likeCount:post.likeCount +1},{new:true})
        res.json(postLike)
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAllPosts,createPost,updatePost,deletePost,likePost}