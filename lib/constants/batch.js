const commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            batchOriginalFilename: 'bulkDebit.xlsx',
            batchName: 'automationTest1' + commonFunc.generateRandomNumber(),
            description: 'automationTest1' + commonFunc.generateRandomNumber(),
            sortByBatchId: 'batchId',
            sortyByCreatedOn: 'createdOn',
            sortByVerifiedOn: 'validatedOn',
            sortByUpdatedOn: 'updatedOn'
        };
    }
};
