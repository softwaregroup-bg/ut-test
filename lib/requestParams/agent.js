var customerConstants = require('./../constants/customer').constants();

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
    },
    actorIdParams: function(context, contextActorId) {
        return {
            actorId: contextActorId(context)
        };
    },
    fetchNetworkParams: function(context, contextParams) {
        return {
            filterBy: {
                agentTypeName: contextParams(context).agentTypeName,
                isActive: contextParams(context).isActive,
                statusId: contextParams(context).statusId,
                agentTypeId: contextParams(context).agentTypeId,
                customerNumber: contextParams(context).customerNumber,
                networkName: contextParams(context).networkName,
                networkOwner: contextParams(context).networkOwner,
                businessUnitId: contextParams(context).businessUnitId,
                isEnabled: contextParams(context).isEnabled
            },
            orderBy: {
                column: contextParams(context).column || 'networkName',
                direction: contextParams(context).direction || 'ASC'
            },
            paging: {
                pageSize: customerConstants.PAGESIZE,
                pageNumber: customerConstants.PAGENUMBER
            }
        };
    }
};
