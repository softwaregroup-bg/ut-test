const joi = require('joi');
module.exports = {
    /**
     * @param {arr} - result to validate (result.terminal)
     * @result {joiObject} - joiValidation
     */
    validateAddTerminal: function(result) {
        const schema = joi.array().items(joi.object().keys({
            actorId: joi.string().required(),
            luno: joi.string().required(),
            tmk: joi.string().required(),
            tmkkvv: joi.string().required(),
            name: joi.string().required(),
            customization: joi.string().required(),
            institutionCode: joi.string().allow(null).required(),
            terminalId: joi.string().required(),
            address: joi.string().required(),
            country: joi.string().required(),
            state: joi.string().required(),
            city: joi.string().required(),
            identificationCode: joi.string().required(),
            merchantId: joi.string().allow(null).required(),
            merchantType: joi.string().required(),
            tsn: joi.number().allow(null).required(),
            cassette1Currency: joi.string().required(),
            cassette1Denomination: joi.number().required(),
            cassette2Currency: joi.string().required(),
            cassette2Denomination: joi.number().required(),
            cassette3Currency: joi.string().required(),
            cassette3Denomination: joi.number().required(),
            cassette4Currency: joi.string().required(),
            cassette4Denomination: joi.number().required(),
            tillAccount: joi.string().allow(null).required(),
            feeAccount: joi.string().allow(null).required(),
            commissionAccount: joi.string().allow(null).required(),
            branchId: joi.number().allow(null).required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.terminal)
     * @result {joiObject} - joiValidation
     */
    validateEditTerminal: function(result) {
        const schema = joi.array().items(joi.object().keys({
            actorId: joi.string().required(),
            luno: joi.string().required(),
            tmk: joi.string().required(),
            tmkkvv: joi.string().required(),
            name: joi.string().required(),
            customization: joi.string().required(),
            institutionCode: joi.string().allow(null).required(),
            terminalId: joi.string().required(),
            address: joi.string().required(),
            country: joi.string().required(),
            state: joi.string().required(),
            city: joi.string().required(),
            identificationCode: joi.string().required(),
            merchantId: joi.string().allow(null).required(),
            merchantType: joi.string().required(),
            tsn: joi.number().allow(null).required(),
            cassette1Currency: joi.string().required(),
            cassette1Denomination: joi.number().required(),
            cassette2Currency: joi.string().required(),
            cassette2Denomination: joi.number().required(),
            cassette3Currency: joi.string().required(),
            cassette3Denomination: joi.number().required(),
            cassette4Currency: joi.string().required(),
            cassette4Denomination: joi.number().required(),
            tillAccount: joi.string().allow(null).required(),
            feeAccount: joi.string().allow(null).required(),
            commissionAccount: joi.string().allow(null).required(),
            branchId: joi.number().allow(null).required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmFileTypes)
     * @result {joiObject} - joiValidation
     */
    validateListConfigurationFileType: function(result) {
        const schema = joi.array().items(joi.object().keys({
            typeId: joi.number().required(),
            itemCode: joi.string().required(),
            itemName: joi.string().required(),
            typeName: joi.string().required(),
            itemDescription: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmFiles)
     * @result {joiObject} - joiValidation
     */
    validateFetchConfigurationFile: function(result) {
        const schema = joi.array().items(
            joi.object().keys({
                fileId: joi.number().integer().required(),
                label: joi.string().required(),
                filePath: joi.string().required(),
                typeName: joi.string().required(),
                createdOn: joi.string().required(),
                typeId: joi.number().integer()
            })
        );

        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmFiles)
     * @result {joiObject} - joiValidation
     */
    validateAddConfigurationFile: function(result) {
        const schema = joi.array().items(joi.object().keys({
            fileId: joi.number().required(),
            label: joi.string().required(),
            typeId: joi.number().required(),
            typeName: joi.string().required(),
            createdOn: joi.string().required(),
            filePath: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmProfiles)
     * @result {joiObject} - joiValidation
     */
    validateFetchProfile: function(result) {
        const schema = joi.array().items(joi.object().keys({
            profileId: joi.number().required(),
            profileName: joi.string().required(),
            isLinked: joi.boolean().allow(0, 1, '0', '1').required(),
            createdOn: joi.string().required(),
            description: joi.string().allow(null),
            atmCount: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmProfile)
     * @result {joiObject} - joiValidation
     */
    validateGetProfile: function(result) {
        const schema = joi.array().items(joi.object().keys({
            profileId: joi.number().required(),
            profileName: joi.string().required(),
            isLinked: joi.boolean().allow(0, 1, '0', '1').required(),
            description: joi.string().allow(null)
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmProfileFiles)
     * @result {joiObject} - joiValidation
     */
    validateGetProfileFiles: function(result) {
        const schema = joi.array().items(joi.object().keys({
            profileFileId: joi.number().required(),
            profileId: joi.number().required(),
            fileId: joi.number().required(),
            label: joi.string().required(),
            typeId: joi.number().required(),
            typeName: joi.string().required(),
            itemCode: joi.string().required(),
            itemDescription: joi.string().required(),
            filePath: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.terminals)
     * @result {joiObject} - joiValidation
     */
    validateFetchTerminals: function(result) {
        const schema = joi.array().items(joi.object().keys({
            atmId: joi.string().required(),
            luno: joi.string().required(),
            tmk: joi.string().required(),
            tmkkvv: joi.string().required(),
            name: joi.string().required(),
            terminalId: joi.string().required(),
            merchantId: joi.string().allow(null).required(),
            merchantType: joi.string().required(),
            address: joi.string().required(),
            country: joi.string().required(),
            state: joi.string().required(),
            city: joi.string().required(),
            institutionCode: null,
            identificationCode: joi.string().required(),
            tillAccount: joi.string().allow(null).required(),
            feeAccount: joi.string().allow(null).required(),
            customization: joi.string().required(),
            commissionAccount: joi.string().allow(null).required(),
            cassette1Denomination: joi.string().required(),
            cassette1Currency: joi.string().required(),
            cassette2Denomination: joi.string().required(),
            cassette2Currency: joi.string().required(),
            cassette3Denomination: joi.string().required(),
            cassette3Currency: joi.string().required(),
            cassette4Denomination: joi.string().required(),
            cassette4Currency: joi.string().required(),
            'sensor.supervisorMode': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.vibration': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.door': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.silentSignal': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.electronicsEnclosure': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.depositBin': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cardBin': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.rejectBin': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cassette1': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cassette2': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cassette3': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cassette4': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.coinDispenser': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.coinHopper1': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.coinHopper2': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.coinHopper3': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.coinHopper4': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cpmPockets': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'fitness.clock': joi.string().allow(null).required(),
            'fitness.comms': joi.string().allow(null).required(),
            'fitness.disk': joi.string().allow(null).required(),
            'fitness.cardReader': joi.string().allow(null).required(),
            'fitness.cashHandler': joi.string().allow(null).required(),
            'fitness.depository': joi.string().allow(null).required(),
            'fitness.receiptPrinter': joi.string().allow(null).required(),
            'fitness.journalPrinter': joi.string().allow(null).required(),
            'fitness.nightDepository': joi.string().allow(null).required(),
            'fitness.encryptor': joi.string().allow(null).required(),
            'fitness.camera': joi.string().allow(null).required(),
            'fitness.doorAccess': joi.string().allow(null).required(),
            'fitness.flexDisk': joi.string().allow(null).required(),
            'fitness.cassette1': joi.string().allow(null).required(),
            'fitness.cassette2': joi.string().allow(null).required(),
            'fitness.cassette3': joi.string().allow(null).required(),
            'fitness.cassette4': joi.string().allow(null).required(),
            'fitness.statementPrinter': joi.string().allow(null).required(),
            'fitness.signageDisplay': joi.string().allow(null).required(),
            'fitness.systemDisplay': joi.string().allow(null).required(),
            'fitness.mediaEntry': joi.string().allow(null).required(),
            'fitness.envelopeDispenser': joi.string().allow(null).required(),
            'fitness.documentProcessing': joi.string().allow(null).required(),
            'fitness.coinDispenser': joi.string().allow(null).required(),
            'fitness.voiceGuidance': joi.string().allow(null).required(),
            'fitness.noteAcceptor': joi.string().allow(null).required(),
            'fitness.chequeProcessor': joi.string().allow(null).required(),
            'supply.cardReader': joi.string().allow(null).required(),
            'supply.depository': joi.string().allow(null).required(),
            'supply.receiptPrinter': joi.string().allow(null).required(),
            'supply.journalPrinter': joi.string().allow(null).required(),
            'supply.rejectBin': joi.string().allow(null).required(),
            'supply.cassette1': joi.string().allow(null).required(),
            'supply.cassette2': joi.string().allow(null).required(),
            'supply.cassette3': joi.string().allow(null).required(),
            'supply.cassette4': joi.string().allow(null).required(),
            'counter.notes1': joi.number().allow(null).required(),
            'counter.notes2': joi.number().allow(null).required(),
            'counter.notes3': joi.number().allow(null).required(),
            'counter.notes4': joi.number().allow(null).required(),
            'counter.rejected1': joi.number().allow(null).required(),
            'counter.rejected2': joi.number().allow(null).required(),
            'counter.rejected3': joi.number().allow(null).required(),
            'counter.rejected4': joi.number().allow(null).required(),
            'counter.dispensed1': joi.number().allow(null).required(),
            'counter.dispensed2': joi.number().allow(null).required(),
            'counter.dispensed3': joi.number().allow(null).required(),
            'counter.dispensed4': joi.number().allow(null).required(),
            'counter.last1': joi.number().allow(null).required(),
            'counter.last2': joi.number().allow(null).required(),
            'counter.last3': joi.number().allow(null).required(),
            'counter.last4': joi.number().allow(null).required(),
            'counter.captured': joi.number().allow(null).required(),
            'counter.transactionCount': joi.number().allow(null).required(),
            'counter.transactionSerialNumber': joi.number().allow(null).required(),
            branchId: joi.number().allow(null).required(),
            organizationName: joi.string().allow(null).required(),
            rowNum: joi.string().allow(null).required(),
            recordsTotal: joi.number().allow(null).required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.terminal)
     * @result {joiObject} - joiValidation
     */
    validateFetchTerminal: function(result) {
        const schema = joi.array().items(joi.object().keys({
            atmId: joi.string().required(),
            luno: joi.string().required(),
            tmk: joi.string().required(),
            tmkkvv: joi.string().required(),
            name: joi.string().required(),
            terminalId: joi.string().required(),
            merchantId: joi.string().allow(null).required(),
            merchantType: joi.string().required(),
            address: joi.string().required(),
            country: joi.string().required(),
            state: joi.string().required(),
            city: joi.string().required(),
            institutionCode: null,
            identificationCode: joi.string().required(),
            tillAccount: joi.string().allow(null).required(),
            feeAccount: joi.string().allow(null).required(),
            customization: joi.string().required(),
            commissionAccount: joi.string().allow(null).required(),
            cassette1Denomination: joi.string().required(),
            cassette1Currency: joi.string().required(),
            cassette2Denomination: joi.string().required(),
            cassette2Currency: joi.string().required(),
            cassette3Denomination: joi.string().required(),
            cassette3Currency: joi.string().required(),
            cassette4Denomination: joi.string().required(),
            cassette4Currency: joi.string().required(),
            'sensor.supervisorMode': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.vibration': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.door': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.silentSignal': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.electronicsEnclosure': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.depositBin': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cardBin': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.rejectBin': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cassette1': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cassette2': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cassette3': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cassette4': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.coinDispenser': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.coinHopper1': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.coinHopper2': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.coinHopper3': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.coinHopper4': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'sensor.cpmPockets': joi.boolean().allow(0, 1, '0', '1').allow(null).required(),
            'fitness.clock': joi.string().allow(null).required(),
            'fitness.comms': joi.string().allow(null).required(),
            'fitness.disk': joi.string().allow(null).required(),
            'fitness.cardReader': joi.string().allow(null).required(),
            'fitness.cashHandler': joi.string().allow(null).required(),
            'fitness.depository': joi.string().allow(null).required(),
            'fitness.receiptPrinter': joi.string().allow(null).required(),
            'fitness.journalPrinter': joi.string().allow(null).required(),
            'fitness.nightDepository': joi.string().allow(null).required(),
            'fitness.encryptor': joi.string().allow(null).required(),
            'fitness.camera': joi.string().allow(null).required(),
            'fitness.doorAccess': joi.string().allow(null).required(),
            'fitness.flexDisk': joi.string().allow(null).required(),
            'fitness.cassette1': joi.string().allow(null).required(),
            'fitness.cassette2': joi.string().allow(null).required(),
            'fitness.cassette3': joi.string().allow(null).required(),
            'fitness.cassette4': joi.string().allow(null).required(),
            'fitness.statementPrinter': joi.string().allow(null).required(),
            'fitness.signageDisplay': joi.string().allow(null).required(),
            'fitness.systemDisplay': joi.string().allow(null).required(),
            'fitness.mediaEntry': joi.string().allow(null).required(),
            'fitness.envelopeDispenser': joi.string().allow(null).required(),
            'fitness.documentProcessing': joi.string().allow(null).required(),
            'fitness.coinDispenser': joi.string().allow(null).required(),
            'fitness.voiceGuidance': joi.string().allow(null).required(),
            'fitness.noteAcceptor': joi.string().allow(null).required(),
            'fitness.chequeProcessor': joi.string().allow(null).required(),
            'supply.cardReader': joi.string().allow(null).required(),
            'supply.depository': joi.string().allow(null).required(),
            'supply.receiptPrinter': joi.string().allow(null).required(),
            'supply.journalPrinter': joi.string().allow(null).required(),
            'supply.rejectBin': joi.string().allow(null).required(),
            'supply.cassette1': joi.string().allow(null).required(),
            'supply.cassette2': joi.string().allow(null).required(),
            'supply.cassette3': joi.string().allow(null).required(),
            'supply.cassette4': joi.string().allow(null).required(),
            'counter.notes1': joi.number().allow(null).required(),
            'counter.notes2': joi.number().allow(null).required(),
            'counter.notes3': joi.number().allow(null).required(),
            'counter.notes4': joi.number().allow(null).required(),
            'counter.rejected1': joi.number().allow(null).required(),
            'counter.rejected2': joi.number().allow(null).required(),
            'counter.rejected3': joi.number().allow(null).required(),
            'counter.rejected4': joi.number().allow(null).required(),
            'counter.dispensed1': joi.number().allow(null).required(),
            'counter.dispensed2': joi.number().allow(null).required(),
            'counter.dispensed3': joi.number().allow(null).required(),
            'counter.dispensed4': joi.number().allow(null).required(),
            'counter.last1': joi.number().allow(null).required(),
            'counter.last2': joi.number().allow(null).required(),
            'counter.last3': joi.number().allow(null).required(),
            'counter.last4': joi.number().allow(null).required(),
            'counter.captured': joi.number().allow(null).required(),
            'counter.transactionCount': joi.number().allow(null).required(),
            'counter.transactionSerialNumber': joi.number().allow(null).required(),
            branchId: joi.number().allow(null).required(),
            organizationName: joi.string().allow(null).required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
