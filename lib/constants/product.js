var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            STARTDATE: commonFunc.getFormattedDate(Date.now()),
            ENDDATE: commonFunc.getFormattedDate(Date.now() + 1000 * 60 * 60 * 24 * 356), // 1 year
            PRODUCTNAME: 'Product' + commonFunc.generateRandomNumber(),
            TERM: 2,
            DEFAULTPAGESIZE: 25,
            PAGESIZE: 500,
            PAGENUMBER: 1,
            // Sorting
            ASC: 'ASC',
            DESC: 'DESC',
            ORDERBYPRODUCTNAME: 'productName',
            ORDERBYPRODUCTID: 'productId',
            ORDERBYCURRENCY: 'currency',
            ORDERBYKYC: 'kyc',
            ORDERBYBUSUNESSUNITNAME: 'businessUnitName',
            ORDERBYSTATUSID: 'statusId',
            ORDERBYISENABLED: 'isEnabled'
        };
    }
};
