const express = require('express');
const res = require('express/lib/response');
const PostController = require('./src/controllers/PostController');
const { append } = require('express/lib/response');
const multer = require('multer');
const upload = multer();

const routes = new express.Router();

routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;