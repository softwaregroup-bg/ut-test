var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            ACCOUNTNAME: 'autoAccount' + commonFunc.generateRandomNumber(),
            TEST1: 'test1'
        };
    }
};
