var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            TRANSFERIDACQUIRER: commonFunc.generateRandomNumber().toString(),
            // Analytics
            FEETYPE: 'feeType',
            VAT: 'VAT',
            OTHERTAX: 'otherTax'

        };
    }
};
