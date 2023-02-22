const joi = require('joi');

const schema = {
    post: joi.object({
        commentId: joi.string().required(),
    }),
}

module.exports = schema;