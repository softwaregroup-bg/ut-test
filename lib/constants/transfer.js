var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            TRANSFERIDACQUIRER: commonFunc.generateRandomNumber().toString(),
            FEETYPE: 'feeType',
            VAT: 'VAT',
            OTHERTAX: 'otherTax',
            ACCOUNTNUMBER: 'accountNumber',
            MSISDN: 'msisdn',
            TZSCURRENCY: 'TZS',
            SOURCEACCOUNTNUMBER: '$' + '{source.account.number}',
            DESTINATIONACCOUNTNUMBER: '$' + '{destination.account.number}',
            // transaction types
            BALANCECHECK: 'balance',
            CASHOUTBRANCH: 'cashOutBranch',
            CASHINBRANCH: 'cashInBranch',
            WALLETTOWALLET: 'walletToWallet',
            REVERSALMESSGAE: 'reversal message'
        };
    }
};
