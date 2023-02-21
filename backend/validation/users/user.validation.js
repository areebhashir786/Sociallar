const { user, passwordValidation } = require("./user.schema");

module.exports = {
    addUserValidation: async (req, res, next) => {
        const value = await user.validate(req.body);
        if (value.error) {
            res.status(404).json({
                success: false,
                message: value.error.details[0].message,
            })
        }
        else {
            next();
        }
    },
    updatePasswordValidation: async (req, res, next) => {
        const value = await passwordValidation.validate(req.body);
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