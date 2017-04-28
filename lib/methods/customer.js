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
    fetchCustomerType: function(stepname, contextStep) {
        return commonFunc.createStep('customer.type.fetch', stepname, context => {
            return {};
        },
        (result, assert) => {
            assert.equals(customerJoiValidation.validateFetchCustomerType(result.customerType).error, null, 'return customer types');
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
    },
    addKyc: function(stepname, contextStep, kycDescription) {
        return commonFunc.createStep('customer.kyc.add', stepname, context => customerParams.addKycParams(context, contextStep, kycDescription),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateAddKyc(result.kyc).error, null, 'Return all details after adding a kyc');
            assert.equals(result.kyc[0].description, kycDescription, 'return kyc description');
        });
    },
    editKyc: function(stepname, contextStep, kycDescription) {
        return commonFunc.createStep('customer.kyc.add', stepname, context => customerParams.editKycParams(context, contextStep, kycDescription),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateEditKyc(result.kyc).error, null, 'Return all details after editing a kyc');
        });
    },
    getKyc: function(stepname, contextStep) {
        return commonFunc.createStep('customer.kyc.get', stepname, context => customerParams.getKycParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateGetKyc(result).error, null, 'Return all details for kyc rule');
        });
    },
    getForCreateKyc: function(stepname, contextStep) {
        return commonFunc.createStep('customer.kyc.getForCreate', stepname, context => customerParams.getForCreateKycParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateGetForCreateKyc(result.levels).error, null, 'Return all details for kyc levels');
        });
    },
    getByDepthOrganization: function(stepname, contextStep, key) {
        return commonFunc.createStep('customer.organization.getByDepth', stepname, context => customerParams.getByDepthOrganizationParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateGetByDepthOrganization(result.organizations).error, null, 'Return all details after get by depth organizations');
        });
    },
    fetchKyc: function(stepname, contextStep) {
        return commonFunc.createStep('customer.kyc.fetch', stepname, context => customerParams.fethKycParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateFetchKyc(result).error, null, 'Return all details after fetching kyc');
        });
    },
    changeKycStatus: function(stepname, contextStep, isActive) {
        return commonFunc.createStep('customer.kyc.changeStatus', stepname, context => customerParams.changeKycStatusParams(context, contextStep, isActive),
        (result, assert) => {
            assert.same(result, [], 'return empty resultset after changing kyc status');
        });
    },
    deleteKyc: function(stepname, contextStep) {
        return commonFunc.createStep('customer.kyc.delete', stepname, context => customerParams.deleteKycParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty resultset after delete');
        });
    },
    listKycAttributes: function(stepname, contextStep) {
        return commonFunc.createStep('customer.kycAttribute.list', stepname, context => customerParams.listKycAttributesParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateListKycAttributes(result.kycAttributes).error, null, 'Return all details for kyc attributes');
        });
    },
    listIncomeRange: function(stepname, contextStep) {
        return commonFunc.createStep('customer.incomeRange.list', stepname, context => {
            return {};
        }, (result, assert) => {
            assert.equals(customerJoiValidation.validateListIncomeRange(result.incomeRange).error, null, 'Return list incomeRange');
        });
    },
    fetchCountry: function(stepname, contextStep) {
        return commonFunc.createStep('customer.country.fetch', 'fetch countries', (context) => {
            return {};
        }, (result, assert) => {
            assert.equals(customerJoiValidation.validateFetchCountry(result.country).error, null, 'Return fetchCountry');
        });
    },
    listMaritalStatus: function(stepname, contextStep) {
        return commonFunc.createStep('customer.maritalStatus.list', 'list martialStatus', (context) => {
            return {};
        }, (result, assert) => {
            assert.equals(customerJoiValidation.validateListMaritalStatus(result.maritalStatus).error, null, 'Return list maritalStatus');
        });
    },
    listEducation: function(stepname, contextStep) {
        return commonFunc.createStep('customer.education.list', 'list education', (context) => {
            return {};
        }, (result, assert) => {
            assert.equals(customerJoiValidation.validateListEducation(result.education).error, null, 'Return list education');
        });
    },
    listEmployment: function(stepname, contextStep) {
        return commonFunc.createStep('customer.employment.list', 'list employment', (context) => {
            return {};
        }, (result, assert) => {
            assert.equals(customerJoiValidation.validateListEmployment(result.employment).error, null, 'Return list employment');
        });
    },
    listEmployerCategory: function(stepname, contextStep) {
        return commonFunc.createStep('customer.employerCategory.list', 'list employerCategory', (context) => {
            return {};
        }, (result, assert) => {
            assert.equals(customerJoiValidation.validateListEmployerCategory(result.employerCategory).error, null, 'Return list employerCategory');
        });
    },
    listIndustry: function(stepname, contextStep) {
        return commonFunc.createStep('customer.industry.list', 'list industry', (context) => {
            return {};
        }, (result, assert) => {
            assert.equals(customerJoiValidation.validateListIndustry(result.industry).error, null, 'Return list industry');
        });
    },
    // referrals
    addReferral: function(stepname, contextStep) {
        return commonFunc.createStep('customer.referral.add', stepname, context => customerParams.addReferralParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateAddReferral(result.referral).error, null, 'return all details after adding referral');
            assert.true((result.referral[0].referralStatus).toString().toLowerCase().indexOf('Open'.toLowerCase()) > -1, 'return open referral status');
            assert.equals(result.referral[0].statusId, customerConstants.STATUSIDNEW, 'return statusId = new');
            assert.true(result.referral[0].isNew, 'return isNew = true');
        });
    },
    getReferral: function(stepname, contextStep) {
        return commonFunc.createStep('customer.referral.get', stepname, context => customerParams.approveReferralParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateAddReferral(result.referral).error, null, 'return all details after getting referral');
        });
    },
    approveReferral: function(stepname, contextStep) {
        return commonFunc.createStep('customer.referral.approve', stepname, context => customerParams.approveReferralParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty resultset after approve referral');
        });
    },
    rejectReferral: function(stepname, contextStep) {
        return commonFunc.createStep('customer.referral.reject', stepname, context => customerParams.rejectReferralParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty resultset after reject referral');
        });
    }
};
