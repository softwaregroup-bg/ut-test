var customerConstants = require('./../constants/customer').constants();
var documentConstants = require('./../constants/document').constants();

module.exports = {
    addCustomerParams: function(context, contextParams, firstName, stateId, statusId) {
        return {
            customer: {
                customerTypeId: contextParams(context).customerTypeId || customerConstants.CUSTOMERTYPEID,
                organizationId: contextParams(context).organizationId,
                customerNumber: contextParams(context).customerNumber,
                stateId: stateId, // pending is the default
                statusId: statusId, // approved is the default
                kycId: contextParams(context).kycId,
                agency: contextParams(context).agency,
                industryId: contextParams(context).industryId,
                sectorId: contextParams(context).sectorId,
                loanCycle: contextParams(context).loanCycle
            },
            person: {
                isEnabled: true,
                isDeleted: false,
                firstName: firstName || customerConstants.FIRSTNAME,
                lastName: contextParams(context).lastName || customerConstants.LASTNAME,
                nationalId: contextParams(context).nationalId || customerConstants.NATIONALID,
                dateOfBirth: contextParams(context).dateOfBirth || customerConstants.DATEOFBIRTH,
                placeOfBirth: contextParams(context).placeOfBirth || customerConstants.PLACEOFBIRTH,
                nationality: contextParams(context).nationality || customerConstants.NATIONALITY,
                gender: contextParams(context).gender || customerConstants.GENDERM
            },
            phone: [{
                phoneTypeId: contextParams(context).phoneTypeId || customerConstants.TYPEIDPERSONAL,
                phoneNumber: contextParams(context).phoneNumber || customerConstants.PHONENUMBER,
                mnoId: contextParams(context).mnoId,
                isPrimary: true
            }],
            document: [{
                documentTypeId: contextParams(context).documentTypeId || documentConstants.DOCUMENTTYPEID,
                statusId: contextParams(context).documentStatusId, // documentStatusId
                documentNumber: contextParams(context).documentNumber,
                expirationDate: contextParams(context).expirationDate
            }]
        };
    },
    actorIdParams: function(context, contextActorId) {
        return {
            actorId: contextActorId(context)
        };
    },
    blockCustomerParams: function(context, contextParams, description) {
        return {
            actorId: contextParams(context),
            description: description
        };
    },
    fetchCustomerParams: function(context, contextParams) {
        return {
            paging: {
                pageSize: customerConstants.PAGESIZE,
                pageNumber: customerConstants.PAGENUMBER
            }
        };
    },
    addOrganizationParams: function(context, contextParams, organizationName) {
        return {
            organization: {
                organizationName: organizationName,
                currency: customerConstants.CURRENCYBG,
                primaryLanguageId: customerConstants.LANGUAGEID,
                isEnabled: contextParams(context).isEnabled || 1,
                isDeleted: contextParams(context).isDeleted || 0
            },
            roles: contextParams(context).role,
            parent: contextParams(context).parent
        };
    },
    fetchOrganizationParams: function(context, contextParams, searchString, isEnabled) {
        return {
            businessUnitId: contextParams(context),
            searchString: searchString,
            isEnabled: isEnabled || 1
        };
    },
    lockOrganizationParams: function(context, contextParams) {
        return {
            actorId: contextParams(context).actorId,
            isEnabled: contextParams(context).isEnabled
        };
    }
};

