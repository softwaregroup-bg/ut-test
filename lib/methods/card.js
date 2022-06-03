// var commonFunc = require('ut-core/test/lib/commonFunc');
const cardJoiValidation = require('./../joiValidations/card');
const cardParams = require('./../requestParams/card');
const commonFunc = require('./commonFunc');

module.exports = {
    fetchBin: function(stepname, getBin) {
        return commonFunc.createStep('card.bin.fetch', stepname, context => getBin(context),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchBin(result.bin).error, null, 'return bins');
            });
    },
    fetchBrand: function(stepname, getBrand) {
        return commonFunc.createStep('card.brand.fetch', stepname, context => getBrand(context),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchCardBrand(result.cardBrand[0]).error, null, 'return card brands');
            });
    },
    fetchEmbossedTypes: function(stepname, getEmbossedType) {
        return commonFunc.createStep('card.embossedType.fetch', stepname, context => getEmbossedType(context),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchEmbossedType(result.embossedType[0]).error, null, 'return embossed types');
            });
    },
    fetchOwnershipTypes: function(stepname, getOwnershipType) {
        return commonFunc.createStep('card.ownershipType.fetch', stepname, context => getOwnershipType(context),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchOwnershipType(result.ownershipType[0]).error, null, 'return ownership types');
            });
    },
    fetchPartners: function(stepname, getIssuerTypes) {
        const mockedPartnerParams = {
            partner: [{
                partnerId: 'cbs',
                partnerName: 'cbs'
            }]
        };
        return commonFunc.createStep(undefined, stepname, mockedPartnerParams,
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchPartners(result.partner[0]).error, null, 'return partners');
            });
    },
    fetchCardNumberConstruction: function(stepname, getConstruction) {
        return commonFunc.createStep('card.cardNumberConstruction.fetch', stepname, context => getConstruction(context),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchCardNumberConstruction(result.cardNumberConstruction[0]).error, null, 'return card number constructions');
            });
    },
    fetchPeriodicCardFee: function(stepname, getCardFee) {
        return commonFunc.createStep('card.periodicCardFee.fetch', stepname, context => getCardFee(context),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchPeriodicCardFee(result.periodicCardFee[0]).error, null, 'return card types');
            });
    },
    listAccountTypes: function(stepname, getCardFee) {
        return commonFunc.createStep('card.accountType.list', stepname, context => getCardFee(context),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateListAccountTypes(result[0][0]).error, null, 'return account types');
            });
    },
    listCustomerTypes: function(stepname, getCardFee) {
        return commonFunc.createStep('card.customerType.list', stepname, context => getCardFee(context),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateListCustomerTypes(result[0][0]).error, null, 'return customer types');
            });
    },
    listDocumentTypes: function(stepname, getCardFee) {
        return commonFunc.createStep('card.documentType.list', stepname, context => getCardFee(context),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateListDocumentTypes(result[0][0]).error, null, 'return customer types');
            });
    },
    fetchConfig: function(stepname, getConfig) {
        return commonFunc.createStep('card.config.fetch', stepname, context => getConfig(context),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchConfig(result).error, null, 'return statuses and reasons');
            });
    },
    addCardProduct: function(stepname, contextStep, productName, isActive) {
        return commonFunc.createStep('card.product.add', stepname, context => cardParams.addProductParams(context, contextStep, productName, isActive),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateAddProduct(result.cardProduct[0], productName).error, null, 'return card product');
                assert.equal(result.cardProduct[0].isActive, isActive, 'return isActive true');
            });
    },
    editCardProduct: function(stepname, contextStep, startDate, endDate, isActive) {
        return commonFunc.createStep('card.product.edit', stepname, context => cardParams.editProductParams(context, contextStep, startDate, endDate, isActive),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateEditProduct(result.cardProduct[0]).error, null, 'return card product');
                assert.ok(result.cardProduct[0].startDate.indexOf(startDate) > -1, 'return correct startDate');
                assert.ok(result.cardProduct[0].endDate.indexOf(endDate) > -1, 'return correct endDate');
                assert.equal(result.cardProduct[0].isActive, Boolean(isActive), 'return correct isActive');
            });
    },
    fetchCardProduct: function(stepname, contextStep, isActive, orderby) {
        return commonFunc.createStep('card.product.fetch', stepname, context => cardParams.fetchProductParams(context, contextStep, isActive, orderby),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchProduct(result.product).error, null, 'return all card products');
                if (isActive != null) {
                    assert.ok(result.product.every(product => product.isActive === Boolean(isActive)), 'return correct isActive');
                }
            });
    },
    getCardProduct: function(stepname, contextStep) {
        return commonFunc.createStep('card.product.get', stepname, context => cardParams.getProductParams(context, contextStep),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateAccountType(result.accountType[0]).error, null, 'return accountType');
                assert.equal(cardJoiValidation.validateCustomerType(result.customerType[0]).error, null, 'return customerType');
            });
    },
    listCardProduct: function(stepname, contextStep) {
        return commonFunc.createStep('card.product.list', stepname, context => cardParams.getListProductParams(context, contextStep),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateListCardProduct(result.product).error, null, 'return list all products');
            });
    },
    addApplication: function(stepname, contextStep, customerName, personName) {
        return commonFunc.createStep('card.application.add', stepname, context => cardParams.addApplicationParams(context, contextStep, customerName, personName),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateAddApplication(result.cardApplication[0]).error, null, 'return card application');
                assert.equal(cardJoiValidation.validateCardApplicationAccount(result.cardApplicationAccount[0]).error, null, 'return card application account');
            });
    },
    fetchApplication: function(stepname, contextStep, statusId, embossedTypeId, orderBy) {
        return commonFunc.createStep('card.application.fetch', stepname, context => cardParams.fetchApplicationParams(context, contextStep, statusId, embossedTypeId, orderBy),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchApplication(result.applications).error, null, 'return fetch applications');
                if (statusId != null) {
                    assert.ok(result.applications.every(applications => applications.statusId === statusId), 'return correct statusId');
                }
                if (embossedTypeId != null) {
                    assert.ok(result.applications.every(applications => applications.embossedTypeId === embossedTypeId), 'return correct typeId');
                }
            });
    },
    updateApplicationState: function(stepname, contextStep, customerName, personName) {
        return commonFunc.createStep('card.application.statusUpdate', stepname, context => cardParams.updateApplicationStateParams(context, contextStep, customerName, personName),
            (result, assert) => {
                assert.same(result, [], 'return updated application');
            });
    },
    getApplication: function(stepname, contextStep) {
        return commonFunc.createStep('card.application.get', stepname, context => cardParams.getApplicationParams(context, contextStep),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateGetApplication(result).error, null, 'return card application');
            });
    },
    addNoNameBatch: function(stepname, contextStep, numberOfCards) {
        return commonFunc.createStep('card.batch.addNoNameBatch', stepname, context => cardParams.addNoNameBatchParams(context, contextStep, numberOfCards),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateAddNoNameBatch(result.batch[0]).error, null, 'return no name batch');
            });
    },
    fetchBatch: function(stepname, contextStep, statusId, orderBy) {
        return commonFunc.createStep('card.batch.fetch', stepname, context => cardParams.fetchBatchParams(context, contextStep, statusId, orderBy),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchBatch(result.batch).error, null, 'return batch details');
                if (statusId != null) {
                    assert.ok(result.batch.every(batch => batch.statusId === statusId), 'return correct statusId');
                }
            });
    },
    updateNoNameBatch: function(stepname, contextStep) {
        return commonFunc.createStep('card.batch.statusUpdate', stepname, context => cardParams.updateNoNameBatchParams(context, contextStep),
            (result, assert) => {
                assert.same(result, [], 'return updated application');
            });
    },
    listModuleAction: function(stepname, contextStep) {
        return commonFunc.createStep('card.moduleAction.list', stepname, context => cardParams.listModuleActionParams(context, contextStep),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateListModuleAction(result.Application).error, null, 'return module action list');
            });
    },
    addCardReason: function(stepname, contextStep, isActive, applicationText, productName) {
        return commonFunc.createStep('card.reason.add', stepname, context => cardParams.addCardReasonParams(context, contextStep, isActive, applicationText, productName),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateAddCardReason(result.cardReason).error, null, 'return added reason');
                assert.equal(result.cardReason[0].isActive, Boolean(isActive), 'return correct isActive');
                assert.equal(result.cardReason[0].module, applicationText, 'return correct product module');
                assert.equal(result.cardReason[0].name, productName, 'return correct product name');
            });
    },
    statusUpdateReason: function(stepname, contextStep, isActive) {
        return commonFunc.createStep('card.reason.statusUpdate', stepname, context => cardParams.statusUpdateReasonParams(context, contextStep, isActive),
            (result, assert) => {
                assert.same(result, [], 'return empty array');
            });
    },
    editCardReason: function(stepname, contextStep, isActive, moduleText, productName) {
        return commonFunc.createStep('card.reason.edit', stepname, context => cardParams.editCardReasonParams(context, contextStep, isActive, moduleText, productName),
            (result, assert) => {
                assert.same(result, [], 'return empty array');
            });
    },
    fetchReason: function(stepname, contextStep) {
        return commonFunc.createStep('card.reason.fetch', stepname, context => cardParams.fetchReasonParams(context, contextStep),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateFetchReason(result.cardReason).error, null, 'return all cardReasons');
            });
    },
    addBin: function(stepname, contextStep, randomBin) {
        return commonFunc.createStep('card.bin.add', stepname, context => cardParams.addBinParams(context, contextStep, randomBin),
            (result, assert) => {
                assert.equal(cardJoiValidation.validateAddBin(result.cardBin[0]).error, null, 'return correct bin');
                assert.equal(result.cardBin[0].startBin, randomBin.toString(), 'return correct bin');
            });
    },
    editBin: function(stepname, contextStep, randomBin, description, isActive) {
        return commonFunc.createStep('card.bin.edit', stepname, context => cardParams.editBinParams(context, contextStep, randomBin, description, isActive),
            (result, assert) => {
                assert.same(result, [], 'return empty array');
            });
    },
    statusUpdateBin: function(stepname, contextStep, isActive) {
        return commonFunc.createStep('card.bin.statusUpdate', stepname, context => cardParams.statusUpdateBinParams(context, contextStep, isActive),
            (result, assert) => {
                assert.same(result, [], 'return empty array');
            });
    },
    editBatch: function(stepname, editBatch) {
        return commonFunc.createStep('card.batch.statusUpdate', stepname, context => editBatch(context),
            (result, assert) => {
                assert.same(result, [], 'return empty array');
            });
    }
};
