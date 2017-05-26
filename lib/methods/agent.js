var commonFunc = require('./commonFunc');
var agentParams = require('./../requestParams/agent');
var agentJoiValidation = require('./../joiValidations/agent');

module.exports = {
    // network
    addNetwork: function(stepname, contextStep) {
        return commonFunc.createStep('agent.network.add', stepname, context => agentParams.addNetworkParams(context, contextStep),
        (result, assert) => {
            assert.equals(agentJoiValidation.validateAddNetwork(result.network).error, null, 'return all details after adding network');
            assert.true(result.network[0].isNew, 'return isNew = true');
        });
    },
    getNetwork: function(stepname, contextStep) {
        return commonFunc.createStep('agent.network.get', stepname, context => agentParams.actorIdParams(context, contextStep),
        (result, assert) => {
            assert.equals(agentJoiValidation.validateGetNetwork(result.network).error, null, 'return all details after getting network');
        });
    },
    fetchNetwork: function(stepname, contextStep) {
        return commonFunc.createStep('agent.network.fetch', stepname, context => agentParams.fetchNetworkParams(context, contextStep),
        (result, assert) => {
            assert.equals(agentJoiValidation.validateFetchNetwork(result.network).error, null, 'return all details after fetching networks');
        });
    }
};
