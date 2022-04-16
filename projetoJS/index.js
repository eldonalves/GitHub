const express = require('express');
const mongoose = require('mongoose');
const res = require('express/lib/response');

const app = express();

mongoose.connect('mongodb+srv://root:xzwdfeh@cluster0.yucuw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

app.use(require ('./routes'));


app.listen(3333);