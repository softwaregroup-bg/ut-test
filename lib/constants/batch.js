var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            batchOriginalFilename: 'bulkDebit.xlsx',
            batchName: 'automationTest1' + commonFunc.generateRandomNumber(),
            description: 'automationTest1' + commonFunc.generateRandomNumber(),
            sortByName: 'name'
        };
    }
};
