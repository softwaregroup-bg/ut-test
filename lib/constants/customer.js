var commonFunc = require('./../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            FIRSTNAME: 'AutomationTest',
            LASTNAME: 'AutomationTestLN',
            CUSTOMERTYPEID: 'client',
            INDIVIDUALCUSTOMERTYPEID: 'individual',
            NATIONALID: commonFunc.generateRandomNumber(),
            DATEOFBIRTH: commonFunc.getFormattedDate(Date.now() - 1000 * 60 * 60 * 24 * 356 * 16),
            PLACEOFBIRTH: 'Sofia',
            NATIONALITY: 'BG', // country code
            GENDERM: 'M',
            GENDERF: 'F',
            CUSTOMERNUMBER: commonFunc.generateRandomNumber().toString(),
            LAT: 23.4567, // coordinates
            LNG: 43.1234, // coordinates
            // Organization
            ORGNAME: 'autoOrg' + commonFunc.generateRandomNumber(),
            CURRENCYBG: 'BGL',
            CBSID: 3,
            CBSNAME: 'Senegal',
            // Phone and address
            TYPEIDPERSONAL: 'personal', // phone
            TYPEIDWORK: 'work', // phone, address
            TYPEIDHOME: 'home', // phone, address
            PHONENUMBER: (commonFunc.generateRandomNumber().toString()),
            NEWPHONENUMBER: ('9' + commonFunc.generateRandomNumber()).toString(),
            MNOID: 1,
            MNOKEY: 'sms/senegal',
            ADDRESS: 'Address' + commonFunc.generateRandomNumber(),
            CITY1: 'NEW YORK',
            CITY2: 'Las Vegas',
            EMAIL: commonFunc.generateRandomEmail(),
            // Filter - statuses & states
            STATUSIDNEW: 'new',
            STATUSIDACTIVE: 'active',
            STATUSIDREJECTED: 'rejected', // state and status
            STATUSIDDELETED: 'deleted',
            STATUSIDINACTIVE: 'inactive',
            STATUSIDPENDING: 'pending', // state and status
            STATUSIDAPPROVED: 'approved',
            STATEIDBLOCKED: 'blocked',
            STATEIDUPTODATE: 'up_to_date', // customer - approved
            // Sorting
            PAGESIZE: 2000,
            PAGESIZEDEFAULT: 20,
            PAGENUMBER: 1,
            ORDERBYNAME: 'name', // order or sort by
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
            SORTORDERASC: 'ASC'
        };
    }
};
