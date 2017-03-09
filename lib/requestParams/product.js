var productConstants = require('./../constants/product').constants();

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
                minAccountOpeningBalance: contextParams(context).minAccountOpeningBalance
            },
            kyc: contextParams(context).kyc,
            customerCategory: contextParams(context).customerCategory,
            productType: contextParams(context).productType
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
                column: 'productName',
                direction: 'ASC'
            },
            paging: {
                pageSize: productConstants.PAGESIZE,
                pageNumber: productConstants.PAGENUMBER
            }
        };
    },
    approveProductParams: function(context, contextParams) {
        return {
            productUnapprovedId: contextParams(context)
        };
    }
};
