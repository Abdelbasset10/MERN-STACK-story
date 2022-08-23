const express = require('express')
const {getAllPosts,createPost,updatePost,deletePost,likePost} = require('../controllers/posts')
const router = express.Router()

router.route('/').get(getAllPosts).post(createPost)
router.route('/:id').patch(updatePost).delete(deletePost)
router.route('/:id/likePost').patch(likePost)

module.exports = router