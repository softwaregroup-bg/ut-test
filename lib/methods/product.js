const commonFunc = require('./commonFunc');
const productParams = require('./../requestParams/product');
const productJoiValidation = require('./../joiValidations/product');

module.exports = {
    addProduct: function(stepname, contextStep, productName) {
        return commonFunc.createStep('ledger.product.add', stepname, context => productParams.addProductParams(context, contextStep, productName),
            (result, assert) => {
                assert.equals(productJoiValidation.validateAddProduct(result).error, null, 'Return all details after adding a product');
            });
    },
    editProduct: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.product.edit', stepname, context => productParams.editProductParams(context, contextStep),
            (result, assert) => {
                assert.equals(productJoiValidation.validateGetProduct(result.product).error, null, 'return all product details after get product');
            });
    },
    fetchProduct: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.product.fetch', stepname, context => productParams.fetchProductParams(context, contextStep),
            (result, assert) => {
                assert.equals(productJoiValidation.validateFetchProduct(result.product).error, null, 'Return all details after fetching products');
            });
    },
    getProduct: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.product.get', stepname, context => productParams.productIdParams(context, contextStep),
            (result, assert) => {
                assert.equals(productJoiValidation.validateGetProduct(result.product).error, null, 'return all product details after get product');
            });
    },
    approveProduct: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.product.approve', stepname, context => productParams.approveProductParams(context, contextStep),
            (result, assert) => {
                assert.same(result, [], 'return empty array after approve product');
            });
    },
    rejectProduct: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.product.reject', stepname, context => productParams.rejectProductParams(context, contextStep),
            (result, assert) => {
                assert.same(result, [], 'return empty array after reject product');
            });
    },
    lockProduct: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.product.lock', stepname, context => productParams.lockProductParams(context, contextStep),
            (result, assert) => {
                assert.same(result, [], 'return empty array after lock/unlock product');
            });
    },
    discardProduct: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.product.discard', stepname, context => productParams.productIdParams(context, contextStep),
            (result, assert) => {
                assert.same(result, [], 'return empty array after discard product changes');
            });
    }
};
