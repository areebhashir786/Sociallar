const { post } = require("./post.schema");

module.exports = {
    deleteCommentValidation: async (req, res, next) => {
        const value = await post.validate(req.body);
        if (value.error) {
            res.status(404).json({
                success: false,
                message: value.error.details[0].message,
            })
        }
        else {
            next();
        }
    }
}