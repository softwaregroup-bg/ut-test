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
            MOBCHANNEl: 'mobile',
            OTPTYPE: 'otp',
            BIOTYPE: 'bio',
            PINTYPE: 'pin',
            TIMEZONE: '+03:00',
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
            MONTH: 'Month'
        };
    }
};
