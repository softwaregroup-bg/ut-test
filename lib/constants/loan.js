// var commonFunc = require('../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            // loan application params
            BOX_PURPOSE: '1', // Working Capital
            BOX_TYPE: 'PARALLEL',
            REPAYMENT_TYPE: 'ANNUITY',

            TYPEID: 8,
            CURRENCYID: 1,
            PURPOSEID: 16,
            FREQUENCYID: 1,
            TERM: 12,
            STATEID: 1,
            STATUSID: 'active',
            REQUESTAMOUNT: 2000005,
            // customer account
            ACCOUNTTYPEID: 2 // savings
        };
    }
};
