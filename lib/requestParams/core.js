module.exports = {
    typeIdParams: function(context, contextTypeId) {
        return {
            typeId: contextTypeId(context)
        };
    },
    addExternalSystemParams: function(context, systemParams) {
        return {
            externalSystem: systemParams(context).externalSystem,
            externalSystemAttributesValues: systemParams(context).externalSystemAttributesValues,
            externalUser: systemParams(context).externalUser
        };
    },
    getExternalSystemParams: function(context, getParams) {
        return {
            externalSystemId: getParams(context)
        };
    }
};
