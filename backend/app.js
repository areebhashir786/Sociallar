const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: "backend/config/config.env" })
}
// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Importing Routes
const post = require('./routes/post');
const user = require('./routes/user');

// Using Routes
app.use('/api/post', post);
app.use('/api/user', user);


module.exports = app;