var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            PRIORITY: commonFunc.generateRandomNumber() % 10000000, // TODO this is just temporary solution
            OPERATIONSTARTDATE: commonFunc.getFormattedDate(Date.now()),
            OPERATIONENDDATE: commonFunc.getFormattedDate(new Date(new Date().getFullYear() + 1, 11, 21)),
            PAGESIZE: 1000,
            OPERATIONCATEGORY: 'oc',
            SOURCECATEGORY: 'sc',
            DESTINATIONCATEGORY: 'dc',
            CHANNELORGANIZATION: 'co',
            SOURCEACCOUNTNUMBER: '$' + '{source.account.number}',
            SOURCEACCOUNTIDLINKED: '$' + '{source.account.id}.linked',
            DESTINATIONACCOUNTNUMBER: '$' + '{destination.account.number}',
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
            // tags
            ACQUIRER: 'acquirer',
            ISSUER: 'issuer',
            FEE: 'fee',
            TAX: 'tax',
            BRANCH: 'branch',
            COMMISSION: 'commission',
            PENDING: 'pending',
            AGENT: 'agent',
            AMOUNT: 'amount',
            MERCHANT: 'merchant'
        };
    }
};
