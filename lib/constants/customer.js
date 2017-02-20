var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            FIRSTNAME: 'AutomationTest',
            LASTNAME: 'AutomationTestLN',
            CUSTOMERTYPEID: 'client',
            NATIONALID: commonFunc.generateRandomNumber(),
            DATEOFBIRTH: commonFunc.getFormattedDate(Date.now() - 1000 * 60 * 60 * 24 * 356 * 16),
            PLACEOFBIRTH: 'Sofia',
            NATIONALITY: 'BG',
            GENDERM: 'm',
            CUSTOMERNUMBER: commonFunc.generateRandomNumber().toString(),
            // Organization
            LANGUAGEID: 1,
            CURRENCYBG: 'BGL',
            // Phone and address
            TYPEIDPERSONAL: 'personal', // phone
            TYPEIDWORK: 'work', // phone, address
            TYPEIDHOME: 'home', // phone, address
            PHONENUMBER: commonFunc.generateRandomNumber().toString(),
            NEWPHONENUMBER: commonFunc.generateRandomNumber().toString(),
            MNOID: 1,
            MNOKEY: 'sms/senegal',
            ADDRESS: 'Address' + commonFunc.generateRandomNumber(),
            CITY1: 'NEW YORK',
            CITY2: 'Las Vegas',
            STATUSIDACTIVE: 'active',
            // Document
            DOCUMENTTYPEID: 'id_card',
            DOCUMENTSTATUSACTIVE: 'active',
            DOCUMENTSTATUSAPPROVED: 'approved',
            EXPIRATIONDATE: commonFunc.getFormattedDate(Date.now() - 1000 * 60 * 60 * 24),
            DOCUMENTNUMBER: commonFunc.generateRandomNumber().toString(),
            // Filter
            STATUSIDREJECTED: 'rejected',
            STATUSIDDELETED: 'deleted',
            STATUSIDINACTIVE: 'inactive',
            STATUSIDPENDING: 'pending',
            STATUSIDAPPROVED: 'approved',
            STATEIDBLOCKED: 'blocked',
            STATEIDPENDING: 'pending',
            STATEIDREJECTED: 'rejected',
            STATEIDUPTODATE: 'up_to_date',
            // Sorting
            PAGESIZE: 100,
            PAGESIZEDEFAULT: 20,
            PAGENUMBER: 1,
            ORDERBYCUSTNUM: 'customerNumber',
            ORDERBYFIRSTNAME: 'firstName',
            ORDERBYLASTNAME: 'lastName',
            ORDERBYFULLNAME: 'fullName',
            ORDERBYCREATEDON: 'createdOn',
            ORDERBYUPDATEDBY: 'updatedBy',
            ORDERBYAGENCY: 'agency',
            ORDERBYSTATUSID: 'statusId',
            ORDERBYSTATUSVALUE: 'statusValue',
            ORDERBYKYCID: 'kycId',
            ORDERBYCUSTOMERTYPE: 'customerType',
            SORTORDERDESC: 'DESC',
            SORTORDERASC: 'ASC',
            ORGNAME: 'autoOrg' + commonFunc.generateRandomNumber()
        };
    }
};
