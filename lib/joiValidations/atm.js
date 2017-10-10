var joi = require('joi');
module.exports = {
    /**
     * @param {arr} - result to validate (result.terminal)
     * @result {joiObject} - joiValidation
     */
    validateAddTerminal: function(result) {
        var schema = joi.array().items(joi.object().keys({
            terminalID: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
