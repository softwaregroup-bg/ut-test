var customerConstants = require('./../constants/customer').constants();

module.exports = {
    addProductParams: function(context, contextParams, productName) {
        return {
            product: {
                name: productName,
                customerTypeId: contextParams(context).customerTypeId,
                branchId: contextParams(context).branchId,
                currencyId: contextParams(context).currencyId,
                startDate: contextParams(context).startDate,
                endDate: contextParams(context).endDate,
                minCustomerAge: contextParams(context).minCustomerAge,
                maxCustomerAge: contextParams(context).maxCustomerAge,
                minAccountBalance: contextParams(context).minAccountBalance,
                maxAccountBalance: contextParams(context).maxAccountBalance,
                minAccountOpeningBalance: contextParams(context).minAccountOpeningBalance,
                productGroupId: contextParams(context).productGroupId,
                productTypeId: contextParams(context).productTypeId,
                productPeriodicFeeId: contextParams(context).productPeriodicFeeId,
                term: contextParams(context).term
            },
            kyc: contextParams(context).kyc,
            customerCategory: contextParams(context).customerCategory
        };
    },
    editProductParams: function(context, contextParams) {
        return {
            product: {
                productId: contextParams(context).productId,
                name: contextParams(context).name,
                branchId: contextParams(context).branchId,
                currencyId: contextParams(context).currencyId,
                startDate: contextParams(context).startDate,
                endDate: contextParams(context).endDate,
                minCustomerAge: contextParams(context).minCustomerAge,
                maxCustomerAge: contextParams(context).maxCustomerAge,
                minAccountBalance: contextParams(context).minAccountBalance,
                maxAccountBalance: contextParams(context).maxAccountBalance,
                minAccountOpeningBalance: contextParams(context).minAccountOpeningBalance
            },
            kycAdded: contextParams(context).kycAdded,
            kycRemoved: contextParams(context).kycRemoved,
            customerCategoryAdded: contextParams(context).customerCategoryAdded,
            customerCategoryRemoved: contextParams(context).customerCategoryRemoved
        };
    },
    fetchProductParams: function(context, contextParams) {
        return {
            filterBy: {
                kycId: contextParams(context).kycId,
                statusId: contextParams(context).statusId,
                productId: contextParams(context).productId,
                productName: contextParams(context).productName,
                isEnabled: contextParams(context).isEnabled,
                businessUnitId: contextParams(context).businessUnitId
            },
            orderBy: {
                column: contextParams(context).column || 'productName',
                direction: contextParams(context).direction || customerConstants.SORTORDERASC
            },
            paging: {
                pageSize: customerConstants.PAGESIZE,
                pageNumber: customerConstants.PAGENUMBER
            }
        };
    },
    approveProductParams: function(context, contextParams) {
        return {
            productId: contextParams(context)
        };
    },
    rejectProductParams: function(context, contextParams, rejectReason) {
        return {
            productId: contextParams(context),
            rejectReason: rejectReason
        };
    }
};
