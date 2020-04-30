const commonFunc = require('./../methods/commonFunc');
const ruleParams = require('./../requestParams/rule');
const ruleJoiValidation = require('./../joiValidations/rule');

module.exports = {
    addRule: function(stepname, contextStep) {
        return commonFunc.createStep('user.rule.add', stepname, context => ruleParams.addRuleParams(context, contextStep),
            (result, assert) => {
                assert.equals(ruleJoiValidation.validateAddRule(result).error, null, 'Return all detals after add rule');
            });
    }
};
