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
    },
    editAccountParams: function(context, contextParams, accountName) {
        return {
            account: {
                accountId: contextParams(context).accountId,
                accountName: accountName,
                accountNumber: contextParams(context).accountNumber,
                businessUnitId: contextParams(context).businessUnitId,
                createdBy: contextParams(context).createdBy,
                createdOn: contextParams(context).createdOn,
                isDeleted: contextParams(context).isDeleted,
                linkedAccount: contextParams(context).linkedAccount,
                ownerId: contextParams(context).ownerId,
                productId: contextParams(context).productId,
                stateId: contextParams(context).stateId,
                statusId: contextParams(context).statusId
            }
        };
    },
    approveAccountParams: function(context, contextParams) {
        return {
            accountIds: contextParams(context)
        };
    },
    rejectAccountParams: function(context, contextParams, rejectReason) {
        return {
            accountId: contextParams(context),
            rejectReason: rejectReason
        };
    }
};
