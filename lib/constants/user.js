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
            OTPTYPE: 'otp',
            BIOTYPE: 'bio',
            TIMEZONE: '+03:00',
            LANGUAGEID: 1,
            // roles
            ROLENAME: 'autoRole ' + commonFunc.generateRandomNumber(),
            ROLEDESCRIPTION: 'automation test role description',
            IMEIRESTRICTION: 'imei',
            INSTALLATIONIDRESTRICTION: 'installationId'
        };
    }
};
