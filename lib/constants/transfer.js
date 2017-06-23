var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            TRANSFERIDACQUIRER: commonFunc.generateRandomNumber().toString(),
            FEETYPE: 'feeType',
            VAT: 'VAT',
            OTHERTAX: 'otherTax',
            MERCHANTTAX: 'merchantTax',
            ACCOUNTNUMBER: 'accountNumber',
            MSISDN: 'msisdn',
            TZSCURRENCY: 'TZS',
            SOURCEACCOUNTNUMBER: '$' + '{source.account.number}',
            DESTINATIONACCOUNTNUMBER: '$' + '{destination.account.number}',
            // transaction types (item codes)
            BALANCECHECK: 'balance',
            CASHOUTBRANCH: 'cashOutBranch',
            CASHINBRANCH: 'cashInBranch',
            WALLETTOWALLET: 'walletToWallet',
            MERCHANTPULLREQUEST: 'merchantPullRequest',
            MERCHANTPAYMENT: 'merchantPayment',
            REVERSALMESSAGE: 'reversal message'
        };
    }
};
