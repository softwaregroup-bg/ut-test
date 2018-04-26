var commonFunc = require('./../methods/commonFunc');
var ruleParams = require('./../requestParams/rule');
var ruleJoiValidation = require('./../joiValidations/rule');

module.exports = {
    addRule: function(stepname, contextStep) {
        return commonFunc.createStep('user.rule.add', stepname, context => ruleParams.addRuleParams(context, contextStep),
            (result, assert) => {
                assert.equals(ruleJoiValidation.validateAddRule(result).error, null, 'Return all detals after add rule');
            });
    }
};
