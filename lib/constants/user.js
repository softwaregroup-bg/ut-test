var commonFunc = require('../methods/commonFunc');
module.exports = {
    constants: function() {
        return {
            ADMINUSERNAME: 'sa',
            ADMINPASSWORD: '123',
            ADMINFIRSTNAME: 'Super',
            URI: '/login',
            USERNAME: 'autoUser' + commonFunc.generateRandomNumber(),
            USERPASSWORD: '123',
            POLICYTYPE: 'password',
            USERNAMETYPE: 'username',
            CHANNEL: 'web',
            MOBCHANNEL: 'mobile',
            OTPTYPE: 'otp',
            BIOTYPE: 'bio',
            PINTYPE: 'pin',
            TIMEZONE: '' - new Date().getTimezoneOffset(),
            LANGUAGEID: '1',
            // roles
            ROLENAME: 'autoRole ' + commonFunc.generateRandomNumber(),
            ROLEDESCRIPTION: 'automation test role description',
            IMEIRESTRICTION: 'imei',
            INSTALLATIONIDRESTRICTION: 'installationId',
            // access policy & pin
            AUTOGENERATEMETHOD: 'autpgenerate',
            ADMININPUTMETHOD: 'adminInput',
            AUTOGENERATEMETHODPIN: 'autogeneratePin',
            USERINPUTMETHOD: 'userInput',
            PUSHNOTIFICATION: 'push',
            EMAILNOTIFICATION: 'email',
            SMSNOTIFICATION: 'sms',
            HOURS: 'Hours',
            MINUTES: 'Minutes',
            MONTH: 'Month',
            NAME: 'name',
            DESCRIPTION: 'description',
            USERNAME1: 'userName',
            FIRSTNAME: 'firstName',
            LASTNAME: 'lastName',
            USERTYPE: 'userType',
            PRIORITY: 'priority',
            USERSECURITYVIOLATION: 'user.securityViolation'
        };
    }
};
