const commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            TRANSFERIDACQUIRER: commonFunc.generateRandomNumber().toString(),
            PRECISION: 4,
            SMALLESTNUM: 0.0001,
            ACCOUNTNUMBER: 'accountNumber',
            MSISDN: 'msisdn',
            TZSCURRENCY: 'TZS',
            // Roles
            MOBILECLIENT: 'MobileClient',
            TELLER: 'Teller',
            MERCHANT: 'Merchant',
            MOBILEAGENT: 'MobileAgent',
            // transaction types (item codes)
            BALANCECHECK: 'balance',
            CASHOUTBRANCH: 'cashOutBranch',
            CASHINBRANCH: 'cashInBranch',
            WALLETTOWALLET: 'walletToWallet',
            MERCHANTPULLREQUEST: 'merchantPullRequest',
            MERCHANTPAYMENT: 'merchantPayment',
            LINKEDACCOUNTTOWALLET: 'linkedAccount', // Pull funds from linked bank account to wallet
            WALLETTOBANKACCOUNT: 'walletToBank', // Transfer from wallet to bank account
            CASHINBANK: 'cashInBank', // Cash-in bank account at agent wallet
            // reversal
            REVERSALMESSAGE: 'reversal message',
            // pending transactions (merchant pull request/merchant payment)
            CANCELTRANSACTION: 'cancel', // merchant cancels
            REJECTTRANSACTION: 'reject', // customer rejects
            APPROVETRANSACTION: 'approve', // customer approves
            APPROVEDSTATUS: 'approved',
            CANCELEDSTATUS: 'canceled',
            REJECTEDSTATUS: 'rejected',
            // errors
            ACCOUNTBALANCERESTRICTIONFAILURE: 'ledger.accountBalanceRestrictionFailure',
            ACCOUNTSTATUSFAILURE: 'ledger.accountStatusFailure',
            MINLIMITAMOUNTERROR: 'rule.exceedMinLimitAmount',
            MAXLIMITAMOUNTERROR: 'rule.exceedMaxLimitAmount',
            DAILYLIMITCOUNTERROR: 'rule.exceedDailyLimitCount',
            WEEKLYLIMITCOUNTERROR: 'rule.exceedWeeklyLimitCount',
            MONTHLYLIMITCOUNTERROR: 'rule.exceedMonthlyLimitCount',
            DAILYLIMITAMOUNTERROR: 'rule.exceedDailyLimitAmount',
            WEEKLYLIMITAMOUNTERROR: 'rule.exceedWeeklyLimitAmount',
            MONTHLYLIMITAMOUNTERROR: 'rule.exceedMonthlyLimitAmount',
            ACCOUNTNOTFOUNDERROR: 'transaction.accountNotFound',
            UNSUPPORTEDREVERSETYPEERROR: 'transaction.unsupportedReverseType',
            TRANSACTIONPERMISSIONERROR: 'transaction.noPermissions',
            UNAUTHORIZEDTRANSFERERROR: 'transfer.unauthorizedTransfer',
            REJECTFAILURE: 'transfer.rejectFailure',
            TRANSFERIDALREADYEXISTS: 'transfer.idAlreadyExists',
            TRANSFERALREADYREVERSEDERROR: 'transfer.transferAlreadyReversed',
            SECURITYVIOLATIONERROR: 'user.securityViolation'
        };
    }
};
