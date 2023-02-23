import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const likeReducer = createReducer(initialState, {
    //Like Reducer
    likeRequest: (state) => {
        state.loading = true;
    },
    likeSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    likeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    // Add Comment Reducer
    addCommentRequest: (state) => {
        state.loading = true;
    },
    addCommentSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    addCommentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    // Delete Comment Reducer
    deleteCommentRequest: (state) => {
        state.loading = true;
    },
    deleteCommentSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteCommentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    // New Post Reducer
    newPostRequest: (state) => {
        state.loading = true;
    },
    newPostSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    newPostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    //Update Caption
    updateCaptionRequest: (state) => {
        state.loading = true;
    },
    updateCaptionSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updateCaptionFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    //delete Post
    deletePostRequest: (state) => {
        state.loading = true;
    },
    deletePostSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deletePostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    //Update Profile
    UpdateProfileRequest: (state) => {
        state.loading = true;
    },
    UpdateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    UpdateProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    //Update Password
    updatePasswordRequest: (state) => {
        state.loading = true;
    },
    updatePasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updatePasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    //Delete Profile
    deleteProfileRequest: (state) => {
        state.loading = true;
    },
    deleteProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    // Forgot Password
    forgotPasswordRequest: (state) => {
        state.loading = true;
    },
    forgotPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    forgotPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    // Reset Password
    resetPasswordRequest: (state) => {
        state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    resetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    //Clear Error & Messages
    clearErrors: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    }
});


export const myPostsReducer = createReducer(initialState, {
    // My Post Reducer
    myPostsRequest: (state) => {
        state.loading = true;
    },
    myPostsSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    },
    myPostsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    },
});

export const userPostsReducer = createReducer(initialState, {
    userPostsRequest: (state) => {
        state.loading = true;
    },
    userPostsSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    },
    userPostsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    },
});