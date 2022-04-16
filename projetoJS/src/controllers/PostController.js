const Post = require('../models/post');

module.exports = {
    async index(req, res) {

    },

    async store(req, res) {
        console.log(req.body);
        return res.json({ ok: true });
    }
};