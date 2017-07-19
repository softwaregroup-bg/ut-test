var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            PRIORITY: commonFunc.generateRandomNumber() % 10000000, // TODO this is just temporary solution
            OPERATIONSTARTDATE: commonFunc.getFormattedDate(Date.now()),
            OPERATIONENDDATE: commonFunc.getFormattedDate(new Date(new Date().getFullYear() + 1, 11, 21)),
            PAGESIZE: 1000,
            SOURCEACCOUNTNUMBER: '$' + '{source.account.number}',
            SOURCEACCOUNTIDLINKED: '$' + '{source.account.id}.linked',
            DESTINATIONACCOUNTNUMBER: '$' + '{destination.account.number}',
            // condition items
            OPERATIONCATEGORY: 'oc',
            SOURCECATEGORY: 'sc',
            DESTINATIONCATEGORY: 'dc',
            // condition actors
            CHANNELORGANIZATION: 'co',
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
            ACQUIRERTAG: '|acquirer|',
            ISSUERTAG: '|issuer|',
            MERCHANTTAG: '|merchant|',
            FEETAG: '|fee|',
            ACQUIRERFEETAG: '|acquirer|fee|',
            ISSUERFEETAG: '|issuer|fee|',
            AGENTCOMMISSIONPENDINGTAG: '|agent|commission|pending|'
        };
    }
};
