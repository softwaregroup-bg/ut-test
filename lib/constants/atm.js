const commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            DENOM1: '10',
            DENOM2: '20',
            DENOM3: '50',
            DENOM4: '100',
            ZERODENOM: '0',
            RANDOMTEXT: 'automation' + commonFunc.generateRandomNumber(),
            TERMINALID: 'A' + commonFunc.generateRandomFixedInteger(7).toString(),
            TMKKVV: commonFunc.generateRandomFixedInteger(6).toString(),
            FOURLETTERS: 'abcd',
            TERMINALNAME: 'automation' + (Math.round(1000000000 + Math.random() * 9999999999)).toString(),
            TMK: 'U0000000000000000000000' + (Math.round(1000000000 + Math.random() * 9999999999)).toString(),
            RANDOMNAME: 'automation' + commonFunc.generateRandomNumber(),
            CONTENTTYPE: 'text/plain',
            CONTENTENCODING: 'base64',
            PAGESIZE: 500,
            PAGENUMBER: 1,
            FILEUPLOAD: '/file-upload',
            ASC: 'ASC',
            DESC: 'DESC',
            PROFILENAME: 'profileName',
            CREATEDON: 'createdOn'
        };
    }
};
