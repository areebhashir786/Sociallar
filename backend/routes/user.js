const express = require('express');
const { register, login, followUnfollowUser, logout, updatePassword, updateProfile, myProfile, getMyPosts, deleteProfile, getProfileById, getAllUsers, forgotPassword, resetPassword, getUserPosts } = require('../controllers/user');
const { isAuthenticated } = require('../middlewares/auth');
const { addUserValidation, updatePasswordValidation } = require('../validation/users/user.validation');
const router = express.Router();

router.post("/register", addUserValidation, register);
router.post("/login", login);
router.put("/update/password", isAuthenticated, updatePasswordValidation, updatePassword);
router.post("/forgot/password", forgotPassword);
router.put("/password/reset/:token", resetPassword);
router.put("/update/profile", isAuthenticated, updateProfile);
router.get("/me", isAuthenticated, myProfile);
router.get("/my/posts", isAuthenticated, getMyPosts);
router.get("/posts/:id", isAuthenticated, getUserPosts);
router.get("/profile/:id", isAuthenticated, getProfileById);
router.get("/all", isAuthenticated, getAllUsers);
router.get("/logout", logout);
router.get("/follow/:id", isAuthenticated, followUnfollowUser);
router.delete("/delete/me", isAuthenticated, deleteProfile);

module.exports = router;
