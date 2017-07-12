var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            TRANSFERIDACQUIRER: commonFunc.generateRandomNumber().toString(),
            ACCOUNTNUMBER: 'accountNumber',
            MSISDN: 'msisdn',
            TZSCURRENCY: 'TZS',
            SOURCEACCOUNTNUMBER: '$' + '{source.account.number}',
            SOURCEACCOUNTIDLINKED: '$' + '{source.account.id}.linked',
            DESTINATIONACCOUNTNUMBER: '$' + '{destination.account.number}',
            // Roles
            MOBILECLIENT: 'MobileClient',
            TELLER: 'Teller',
            MERCHANT: 'Merchant',
            MOBILEAGENT: 'MobileAgent',
            // split analytics
            FEETYPE: 'feeType',
            VAT: 'VAT',
            OTHERTAX: 'otherTax',
            MERCHANTTAX: 'merchantTax',
            WALLETTOBANK: 'walletToBank',
            CREDIT: 'credit',
            CHANNELID: '$' + '{channel.id}',
            AGENTID: 'agentId',
            STATUSID: 'statusId',
            // transaction types (item codes)
            BALANCECHECK: 'balance',
            CASHOUTBRANCH: 'cashOutBranch',
            CASHINBRANCH: 'cashInBranch',
            WALLETTOWALLET: 'walletToWallet',
            MERCHANTPULLREQUEST: 'merchantPullRequest',
            MERCHANTPAYMENT: 'merchantPayment',
            LINKEDACCOUNTTOWALLET: 'linkedAccount', // Pull funds from linked bank account to wallet
            WALLETTOBANKACCOUNT: 'walletToBank', // Transfer from wallet to bank account
            CASHINBANK: 'cashInBank', // Cash-in from bank account at agent wallet
            // reversal
            REVERSALMESSAGE: 'reversal message'
        };
    }
};
