// var customerConstants = require('./../constants/customer').constants();

module.exports = {
    // network
    addNetworkParams: function(context, contextParams) {
        return {
            network: {
                name: contextParams(context).name,
                description: contextParams(context).description
            },
            parent: contextParams(context).parent,
            networkTypeIds: contextParams(context).networkTypeIds
        };
    }
};
