var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            PRIORITY: commonFunc.generateRandomNumber() % 10000000, // TODO this is just temporary solution
            OPERATIONSTARTDATE: commonFunc.getFormattedDate(Date.now()),
            OPERATIONENDDATE: commonFunc.getFormattedDate(Date.now() + 1000 * 60 * 60 * 24 * 356 * 5),
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
            STATUSID: 'statusId'
        };
    }
};
