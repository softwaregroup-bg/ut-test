var commonFunc = require('./commonFunc');
var agentParams = require('./../requestParams/agent');
var agentJoiValidation = require('./../joiValidations/agent');

module.exports = {
    // network
    addNetwork: function(stepname, contextStep) {
        return commonFunc.createStep('agent.network.add', stepname, context => agentParams.addNetworkParams(context, contextStep),
            (result, assert) => {
                // console.log(result);
                assert.equals(agentJoiValidation.validateAddNetwork(result.network).error, null, 'return all details after adding network');
                assert.true(result.network[0].isNew, 'return isNew = true');
            });
    },
    getNetwork: function(stepname, contextStep) {
        return commonFunc.createStep('agent.network.get', stepname, context => agentParams.actorIdParams(context, contextStep),
            (result, assert) => {
                // console.log(result);
                assert.equals(agentJoiValidation.validateGetNetwork(result.network).error, null, 'return all details after getting network');
            });
    },
    fetchNetwork: function(stepname, contextStep) {
        return commonFunc.createStep('agent.network.fetch', stepname, context => agentParams.fetchNetworkParams(context, contextStep),
            (result, assert) => {
                // console.log(result);
                assert.equals(agentJoiValidation.validateFetchNetwork(result.network).error, null, 'return all details after fetching networks');
            });
    },
    approveNetwork: function(stepname, contextStep) {
        return commonFunc.createStep('agent.network.approve', stepname, context => agentParams.actorIdParams(context, contextStep),
            (result, assert) => {
                // console.log(result);
                assert.same(result, [], 'return empty resultset after approve network');
            });
    },
    rejectNetwork: function(stepname, contextStep) {
        return commonFunc.createStep('agent.network.reject', stepname, context => agentParams.rejectNetworkParams(context, contextStep),
            (result, assert) => {
                // console.log(result);
                assert.same(result, [], 'return empty resultset after reject network');
            });
    },
    discardNetwork: function(stepname, contextStep) {
        return commonFunc.createStep('agent.network.discard', stepname, context => agentParams.actorIdParams(context, contextStep),
            (result, assert) => {
                // console.log(result);
                assert.same(result, [], 'return empty resultset after discard network');
            });
    }
};
