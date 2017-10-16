// var atmConstants = require('./../constants/atm').constants();

module.exports = {
    addTerminalParams: function(context, contextStep) {
        return {
            terminal: [{
                cassette1Currency: contextStep(context).cassette1Currency,
                cassette1Denomination: contextStep(context).cassette1Denomination,
                cassette2Currency: contextStep(context).cassette2Currency,
                cassette2Denomination: contextStep(context).cassette2Denomination,
                cassette3Currency: contextStep(context).cassette3Currency,
                cassette3Denomination: contextStep(context).cassette3Denomination,
                cassette4Currency: contextStep(context).cassette4Currency,
                cassette4Denomination: contextStep(context).cassette4Denomination,
                commissionAccount: contextStep(context).commissionAccount,
                customization: contextStep(context).customization,
                feeAccount: contextStep(context).feeAccount,
                identificationCode: contextStep(context).identificationCode,
                luno: contextStep(context).luno,
                merchantType: contextStep(context).merchantType,
                name: contextStep(context).name,
                terminalId: contextStep(context).terminalId,
                terminalName: contextStep(context).terminalName,
                tillAccount: contextStep(context).tillAccount,
                tmk: contextStep(context).tmk,
                tmkkvv: contextStep(context).tmkkvv
            }]
        };
    },
    listConfigurationFileTypeParams: function(context, contextStep) {
        return {};
    }
};
