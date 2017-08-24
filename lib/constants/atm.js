var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            DENOM1: '10',
            DENOM2: '20',
            DENOM3: '50',
            DENOM4: '100',
            ZERODENOM: '0',
            RANDOMTEXT: 'automation' + commonFunc.generateRandomNumber(),
            TERMINALID: 'A' + (Math.round(1000000 + Math.random() * 9999999)).toString(),
            TERMINALNAME: 'automation' + (Math.round(1000000000 + Math.random() * 9999999999)).toString(),
            TMK: 'U0000000000000000000000' + (Math.round(1000000000 + Math.random() * 9999999999)).toString(),
            TMKKVV: (Math.floor(100000 + Math.random() * 999999)).toString()
        };
    }
};
