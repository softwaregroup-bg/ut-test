var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            STARTDATE: commonFunc.getFormattedDate(Date.now()),
            ENDDATE: commonFunc.getFormattedDate(Date.now() + 1000 * 60 * 60 * 24 * 356), // 1 year
            DEFAULTPAGESIZE: 25,
            PAGESIZE: 500,
            PAGENUMBER: 1
        };
    }
};
