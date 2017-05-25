var commonFunc = require('./commonFunc');
var agentParams = require('./../requestParams/agent');
var agentJoiValidation = require('./../joiValidations/agent');
// var agentConstants = require('./../constants/agent').constants();

module.exports = {
    // network
    addNetwork: function(stepname, contextStep) {
        return commonFunc.createStep('agent.network.add', stepname, context => agentParams.addNetworkParams(context, contextStep),
        (result, assert) => {
            assert.equals(agentJoiValidation.validateAddNetwork(result.network).error, null, 'return all details after adding network');
        });
    },
    getNetwork: function(stepname, contextStep) {
        return commonFunc.createStep('agent.network.get', stepname, context => agentParams.actorIdParams(context, contextStep),
        (result, assert) => {
            // console.log(result);
        });
    }
};
