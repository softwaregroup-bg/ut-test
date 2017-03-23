var commonFunc = require('./commonFunc');
var customerParams = require('./../requestParams/customer');
var customerJoiValidation = require('./../joiValidations/customer');
var customerConstants = require('./../constants/customer').constants();

module.exports = {
    getCustomer: function(stepname, contextStep, firstName) {
        return commonFunc.createStep('customer.file.get', stepname, context => customerParams.actorIdParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateGetCustomer(result.customer).error, null, 'return customer details');
            assert.equals(customerJoiValidation.validateGetPerson(result.person, firstName || customerConstants.FIRSTNAME).error, null, 'return person details');
        });
    },
    addCustomer: function(stepname, contextStep, firstName, stateId, statusId) {
        return commonFunc.createStep('customer.customer.add', stepname, context => customerParams.addCustomerParams(context, contextStep, firstName, stateId, statusId),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateGetCustomer(result.customer, customerConstants.CUSTOMERTYPEID).error, null, 'return customer details');
            assert.equals(customerJoiValidation.validateGetPerson(result.person, firstName || customerConstants.FIRSTNAME).error, null, 'return person details');
        });
    },
    approveCustomer: function(stepname, contextStep, firstName) {
        return commonFunc.createStep('customer.file.approve', stepname, (context) => customerParams.actorIdParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateGetCustomer(result.customer).error, null, 'return customer details after approve customer');
            assert.equals(customerJoiValidation.validateGetPerson(result.person, firstName || customerConstants.FIRSTNAME).error, null, 'return person details  after approve customer');
            assert.equals(result.customer.stateId, customerConstants.STATEIDUPTODATE, 'return stateId - ' + customerConstants.STATEIDUPTODATE);
            assert.equals(result.customer.statusId, customerConstants.STATUSIDAPPROVED, 'return statusId - ' + customerConstants.STATUSIDAPPROVED);
        });
    },
    rejectCustomer: function(stepname, contextStep, firstName) {
        return commonFunc.createStep('customer.file.reject', stepname, (context) => customerParams.actorIdParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateGetCustomer(result.customer).error, null, 'return customer details after reject customer');
            assert.equals(customerJoiValidation.validateGetPerson(result.person, firstName || customerConstants.FIRSTNAME).error, null, 'return person details  after reject customer');
            assert.equals(result.customer.stateId, customerConstants.STATUSIDREJECTED, 'return stateId - ' + customerConstants.STATUSIDREJECTED);
            assert.equals(result.customer.statusId, customerConstants.STATUSIDAPPROVED, 'return statusId - ' + customerConstants.STATUSIDAPPROVED);
        });
    },
    blockCustomer: function(stepname, contextStep, description, firstName) {
        return commonFunc.createStep('customer.file.block', stepname, (context) => customerParams.blockCustomerParams(context, contextStep, description),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateGetCustomer(result.customer).error, null, 'return customer details after block customer');
            assert.equals(customerJoiValidation.validateGetPerson(result.person, firstName || customerConstants.FIRSTNAME).error, null, 'return person details  after block customer');
            assert.equals(result.customer.stateId, customerConstants.STATEIDBLOCKED, 'return stateId - ' + customerConstants.STATEIDBLOCKED);
            assert.equals(result.customer.statusId, customerConstants.STATUSIDAPPROVED, 'return statusId - ' + customerConstants.STATUSIDAPPROVED);
        });
    },
    fetchCustomer: function(stepname, contextStep, statusId, stateId, firstName, lastName) {
        return commonFunc.createStep('customer.customer.fetch', stepname, context => customerParams.fetchCustomerParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateFetchCustomers(result.customer, statusId, stateId, firstName, lastName).error, null, 'Return all details after adding a customer');
        });
    },
    addOrganization: function(stepname, contextStep, organizationName) {
        return commonFunc.createStep('customer.organization.add', stepname, context => customerParams.addOrganizationParams(context, contextStep, organizationName),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateAddOrganization(result['organization.info'][0]).error, null, 'return all details after creating the organization');
            assert.equals(result['organization.info'][0].organizationName, organizationName, 'return organizationName');
            assert.equals(result['organization.info'][0].statusId, customerConstants.STATUSIDNEW, 'return status new');
        });
    },
    fetchOrganization: function(stepname, contextStep, searchString, isEnabled) {
        return commonFunc.createStep('customer.organization.fetch', stepname, context => customerParams.fetchOrganizationParams(context, contextStep, searchString, isEnabled),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateFetchOrganization(result.organization).error, null, 'return all details after fetching organization');
        });
    },
    getOrganization: function(stepname, contextStep) {
        return commonFunc.createStep('customer.organization.get', stepname, context => customerParams.getOrganizationParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.vaidateGetOrganizationInfo(result['organization.info'][0]).error, null, 'return all details after getting organization');
            if (result['organization.infoUnapproved'] !== undefined) {
                assert.equals(customerJoiValidation.vaidateGetOrganizationInfo(result['organization.infoUnapproved'][0]).error, null, 'return all details after getting organization');
            }
        });
    },
    editOrganization: function(stepname, contextStep, organizationName) {
        return commonFunc.createStep('customer.organization.edit', stepname, context => customerParams.editOrganizationParams(context, contextStep, organizationName),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateEditOrganization(result.organization[0]).error, null, 'return all details after editing an organization');
            assert.equals(result.organization[0].organizationName, organizationName, 'return organizationName');
            assert.equals(result.organization[0].statusId, customerConstants.STATUSIDPENDING, 'return status pending');
        });
    },
    approveOrganization: function(stepname, contextStep) {
        return commonFunc.createStep('customer.organization.approve', stepname, context => customerParams.approveOrganizationParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty array after approve organization');
        });
    },
    discardOrganization: function(stepname, contextStep) {
        return commonFunc.createStep('customer.organization.discard', stepname, context => customerParams.discardOrganizationParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty array after discard organization');
        });
    },
    rejectOrganization: function(stepname, contextStep, rejectReason) {
        return commonFunc.createStep('customer.organization.reject', stepname, context => customerParams.rejectOrganizationParams(context, contextStep, rejectReason),
        (result, assert) => {
            assert.same(result, [], 'return empty array after reject organization');
        });
    },
    removeOrganization: function(stepname, contextStep) {
        return commonFunc.createStep('customer.organization.delete', stepname, context => customerParams.removeOrganizationParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty array after remove organization(s)');
        });
    },
    lockOrganization: function(stepname, contextStep) {
        return commonFunc.createStep('customer.organization.lock', stepname, context => customerParams.lockOrganizationParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty resultset after lock/unlock organization');
        });
    }
};
