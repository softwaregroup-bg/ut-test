var commonFunc = require('./commonFunc');
var productParams = require('./../requestParams/product');
var productJoiValidation = require('./../joiValidations/product');

module.exports = {
    addProduct: function(stepname, contextStep, productName) {
        return commonFunc.createStep('product.product.add', stepname, context => productParams.addProductParams(context, contextStep, productName),
        (result, assert) => {
            assert.equals(productJoiValidation.validateAddProduct(result).error, null, 'Return all details after adding a product');
        });
    },
    fetchProduct: function(stepname, contextStep) {
        return commonFunc.createStep('product.product.fetch', stepname, context => productParams.fetchProductParams(context, contextStep),
        (result, assert) => {
            assert.equals(productJoiValidation.validateFetchProduct(result.product).error, null, 'Return all details after fetching products');
        });
    },
    approveProduct: function(stepname, contextStep) {
        return commonFunc.createStep('product.product.approve', stepname, context => productParams.approveProductParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty array after approve product');
        });
    }
};
