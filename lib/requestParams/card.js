var customerConstants = require('./../constants/customer').constants();
var cardConstants = require('./../constants/card').constants();

module.exports = {
    addProductParams: function(context, productContext, productName, isActive) {
        return {
            product: {
                name: productName,
                description: cardConstants.DESCRIPTION,
                startDate: cardConstants.STARTDATE,
                endDate: cardConstants.ENDDATE,
                typeId: productContext(context).typeId,
                binId: productContext(context).binId,
                cardNumberConstructionId: productContext(context).cardNumberConstructionId,
                termMonth: cardConstants.TERMMONTH,
                isActive: isActive == null ? 1 : isActive,
                periodicCardFeeId: productContext(context).periodicCardFeeId,
                branchId: productContext(context).branchId
            },
            productAccountType: [{
                productAccountTypeId: productContext(context).productAccountTypeId,
                productId: productContext(context).productId,
                accountTypeId: productContext(context).accountTypeId
            }],
            productCustomerType: [{
                productCustomerTypeId: productContext(context).productCustomerTypeId,
                productId: productContext(context).productId,
                customerTypeId: productContext(context).customerTypeId
            }]
        };
    },
    editProductParams: function(context, productContext, startDate, endDate, isActive) {
        return {
            product: {
                productId: productContext(context).productId,
                startDate: startDate,
                endDate: endDate,
                isActive: isActive == null ? 1 : isActive
            },
            productAccountType: [{
                productAccountTypeId: productContext(context).productAccountTypeId,
                productId: productContext(context).productId,
                accountTypeId: productContext(context).accountTypeId
            }],
            productCustomerType: [{
                productCustomerTypeId: productContext(context).productCustomerTypeId,
                productId: productContext(context).productId,
                customerTypeId: productContext(context).customerTypeId
            }]
        };
    },
    getProductParams: function(context, getContex) {
        return {
            productId: getContex(context)
        };
    },
    getListProductParams: function(context) {
        return {};
    },
    addApplicationParams: function(context, applicationContext, customerName, personName) {
        return {
            application: {
                customerName: customerName || customerConstants.FIRSTNAME + ' ' + customerConstants.LASTNAME,
                customerNumber: applicationContext(context).application.customerNumber,
                holderName: applicationContext(context).application.holderName,
                personName: personName || customerConstants.FIRSTNAME + ' ' + customerConstants.LASTNAME,
                personNumber: applicationContext(context).application.personNumber,
                productId: applicationContext(context).application.productId,
                targetBranchId: applicationContext(context).application.targetBranchId,
                issuingBranchId: applicationContext(context).application.issuingBranchId
            },
            account: [{
                accountNumber: applicationContext(context).account[0].accountNumber,
                accountOrder: applicationContext(context).account[0].accountOrder,
                accountTypeName: applicationContext(context).account[0].accountTypeName,
                currency: applicationContext(context).account[0].currency,
                isPrimary: applicationContext(context).account[0].isPrimary
            }]
        };
    },
    updateApplicationStateParams: function(context, applicationContext, customerName, personName) {
        return {
            application: {
                applicationId: applicationContext(context).application.applicationId,
                batchId: applicationContext(context).application.batchId || null,
                batchName: applicationContext(context).application.batchName || '',
                cardnumber: applicationContext(context).application.cardNumber || null,
                nameType: applicationContext(context).application.nameType || null,
                customerName: customerName || customerConstants.FIRSTNAME + ' ' + customerConstants.LASTNAME,
                customerNumber: applicationContext(context).application.customerNumber,
                customerId: applicationContext(context).application.customerId || null,
                holderName: applicationContext(context).application.holderName,
                personName: personName || customerConstants.FIRSTNAME + ' ' + customerConstants.LASTNAME,
                personNumber: applicationContext(context).application.personNumber,
                productId: applicationContext(context).application.productId,
                productName: applicationContext(context).application.productName,
                targetBranchId: applicationContext(context).application.targetBranchId,
                reasonId: applicationContext(context).application.reasonId || null,
                reasonText: applicationContext(context).application.reasonText || null,
                statusId: applicationContext(context).application.statusId,
                statusLabel: applicationContext(context).application.statusLabel,
                statusName: applicationContext(context).application.statusName,
                targetBranchName: applicationContext(context).application.targetBranchName,
                typeId: applicationContext(context).application.typeId,
                typeName: applicationContext(context).application.typeName
            },
            account: [{
                applicationId: applicationContext(context).account[0].applicationId,
                accountNumber: applicationContext(context).account[0].accountNumber,
                accountOrder: applicationContext(context).account[0].accountOrder,
                accountTypeName: applicationContext(context).account[0].accountTypeName,
                currency: applicationContext(context).account[0].currency,
                isPrimary: applicationContext(context).account[0].isPrimary
            }],
            applicationActionId: applicationContext(context).applicationActionId,
            batch: applicationContext(context).batch
        };
    },
    getApplicationParams: function(context, getContex) {
        return {
            applicationId: getContex(context)
        };
    },
    addNoNameBatchParams: function(context, batchContext, numberOfCards) {
        return {
            batch: {
                batchName: batchContext(context).batch.batchName || cardConstants.NONAMEBATCH,
                numberOfCards: numberOfCards,
                productId: batchContext(context).batch.productId,
                targetBranchId: batchContext(context).batch.targetBranchId,
                issuingBranchId: batchContext(context).batch.issuingBranchId
            }
        };
    },
    fetchProductParams: function(context, productContext, isActive, orderBy) {
        return {
            filterBy: {isActive: isActive},
            orderBy: {orderBy: orderBy},
            paging: {
                pageSize: cardConstants.PAGESIZE,
                pageNumber: cardConstants.PAGENUMBER
            }
        };
    },
    fetchBatchParams: function(context, batchContext, statusId, orderBy) {
        return {
            filterBy: {statusId: statusId},
            orderBy: [{orderBy: orderBy}],
            paging: {
                pageSize: cardConstants.PAGESIZE,
                pageNumber: cardConstants.PAGENUMBER
            }
        };
    },
    fetchApplicationParams: function(context, applicationContext, statusId, typeId, orderBy) {
        return {
            filterBy: {statusId: statusId, typeId: typeId},
            orderBy: [{orderBy: orderBy}],
            paging: {
                pageSize: cardConstants.PAGESIZE,
                pageNumber: cardConstants.PAGENUMBER
            }
        };
    },
    updateNoNameBatchParams: function(context, updateBatchContext) {
        return {
            batch: {
                batchId: updateBatchContext(context).batch.batchId,
                batchName: updateBatchContext(context).batch.batchName,
                branchId: updateBatchContext(context).batch.branchId,
                issuingBranchId: updateBatchContext(context).batch.issuingBranchId,
                numberOfCards: updateBatchContext(context).batch.numberOfCards,
                productId: updateBatchContext(context).batch.productId,
                statusId: updateBatchContext(context).batch.productId,
                targetBranchId: updateBatchContext(context).batch.targetBranchId
            },
            batchActionId: updateBatchContext(context).batchActionId
        };
    },
    listModuleActionParams: function(context) {
        return {};
    },
    addCardReasonParams: function(context, addReasonContext, isActive, applicationText, reasonName) {
        return {
            action: addReasonContext(context).action,
            reason: {
                isActive: isActive,
                module: applicationText,
                name: reasonName
            }
        };
    },
    getCardReasonParams: function(context, reasonId) {
        return {
            reasonId: reasonId
        };
    },
    statusUpdateReasonParams: function(context, statusUpdateReason, isActive) {
        return {
            reason: [{
                reasonId: statusUpdateReason(context).reasonId,
                isActive: isActive
            }]
        };
    }
};
