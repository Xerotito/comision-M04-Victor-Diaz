const PostController = require('../controllers/PostController')

const postRouter = require('express').Router()  

postRouter.post('/create', PostController.createPost) //   /api/post/create method POST


module.exports = postRouter