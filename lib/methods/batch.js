const commonFunc = require('./commonFunc');
const batchParams = require('./../requestParams/batch');
const batchJoiValidations = require('./../joiValidations/batch');

module.exports = {
    // fetch all batch types
    bulkBatchFetch: function(stepname, contextStep) {
        return commonFunc.createStep('bulk.batch.typeFetch', stepname, context => batchParams.bulkBatchFetchParams(context, contextStep),
            (result, assert) => {
                assert.equals(batchJoiValidations.validateFetchBatchType(result.batchTypes).error, null, 'return uall batch types');
            });
    }
};
