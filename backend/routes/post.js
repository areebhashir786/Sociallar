const express = require('express');
const { createPost, likeAndUnlikePost, deletePost, getPostOfFollowing, updateCaption, commentOnPost, deleteComment } = require('../controllers/Post');
const { isAuthenticated } = require('../middlewares/auth');
const { deleteCommentValidation } = require('../validation/posts/post.validation');
const router = express.Router();

router.post("/create", isAuthenticated, createPost);
router.put("/update/caption/:id", isAuthenticated, updateCaption);
router.delete("/:id", isAuthenticated, deletePost);
router.get("/like/:id", isAuthenticated, likeAndUnlikePost);
router.get("/postsfollowing", isAuthenticated, getPostOfFollowing)
router.put('/comment/:id', isAuthenticated, commentOnPost);
router.delete("/comment/:id", isAuthenticated, deleteCommentValidation, deleteComment);

module.exports = router;
