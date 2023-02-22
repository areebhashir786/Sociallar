const joi = require('joi');

const schema = {
    user: joi.object({
        name: joi.string().max(60).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        avatar: joi.string()
    }),
    passwordValidation: joi.object({
        oldPassword: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        newPassword: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).invalid(joi.ref('oldPassword')).required()
    })
}

module.exports = schema;