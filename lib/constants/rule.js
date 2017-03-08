var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            PRIORITY: Math.ceil(commonFunc.generateRandomNumber() / 1000000), // TODO this is just temporary solution
            OPERATIONSTARTDATE: commonFunc.getFormattedDate(Date.now()),
            OPERATIONENDDATE: commonFunc.getFormattedDate(Date.now() + 1000 * 60 * 60 * 24 * 356 * 5)
        };
    }
};
