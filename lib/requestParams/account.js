var customerConstants = require('./../constants/customer').constants();

module.exports = {
    addAccountParams: function(context, contextParams, accountName) {
        return {
            account: {
                ownerId: contextParams(context).ownerId,
                accountNumber: contextParams(context).accountNumber,
                productId: contextParams(context).productId,
                businessUnitId: contextParams(context).businessUnitId,
                accountName: accountName
            },
            accountPerson: {
                personId: contextParams(context).personId
            }
        };
    },
    fetchAccountParams: function(context, contextParams) {
        return {
            filterBy: {
                ownerId: contextParams(context).ownerId,
                statusId: contextParams(context).statusId,
                accountNumber: contextParams(context).accountNumber,
                productName: contextParams(context).productName,
                productTypeId: contextParams(context).productTypeId,
                stateId: contextParams(context).stateId
            },
            orderBy: {
                column: contextParams(context).column || 'accountName',
                direction: contextParams(context).direction || customerConstants.SORTORDERASC
            },
            paging: {
                pageSize: customerConstants.PAGESIZE,
                pageNumber: customerConstants.PAGENUMBER
            }
        };
    }
};
