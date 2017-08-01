var joi = require('joi');
module.exports = {
    /**
     * @param {object}  result - result to validate (result.condition[0])
     * @return {joiObject} - joiValidation
     */
    validateAddRule: function(result) {
        var schema = joi.object().keys({
            condition: joi.array().items(joi.object().keys({
                conditionId: joi.number().integer().required(),
                priority: joi.number().integer().required(),
                channelCountryId: joi.number().allow(null),
                channelRegionId: joi.number().allow(null),
                channelCityId: joi.number().allow(null),
                channelOrganizationId: joi.number().allow(null),
                channelSupervisorId: joi.number().allow(null),
                channelTag: joi.string().allow(null),
                channelRoleId: joi.number().allow(null),
                channelId: joi.number().allow(null),
                operationId: joi.number().allow(null),
                operationTag: joi.string().allow(null),
                operationStartDate: joi.date().allow(null),
                operationEndDate: joi.date().allow(null),
                sourceCountryId: joi.number().allow(null),
                sourceRegionId: joi.number().allow(null),
                sourceCityId: joi.number().allow(null),
                sourceOrganizationId: joi.number().allow(null),
                sourceSupervisorId: joi.number().allow(null),
                sourceTag: joi.string().allow(null),
                sourceId: joi.number().allow(null),
                sourceCardProductId: joi.number().allow(null),
                sourceAccountProductId: joi.number().allow(null),
                sourceAccountId: joi.number().allow(null),
                destinationCountryId: joi.number().allow(null),
                destinationRegionId: joi.number().allow(null),
                destinationCityId: joi.number().allow(null),
                destinationOrganizationId: joi.number().allow(null),
                destinationSupervisorId: joi.number().allow(null),
                destinationTag: joi.string().allow(null),
                destinationId: joi.number().allow(null),
                destinationAccountProductId: joi.number().allow(null),
                destinationAccountId: joi.number().allow(null)
            })),
            conditionActor: joi.array(),
            conditionItem: joi.array(),
            conditionProperty: joi.array(),
            limit: joi.array().items(joi.object().keys({
                limitId: joi.number().integer(),
                conditionId: joi.number().integer(),
                currency: joi.string(),
                minAmount: joi.number().allow(null),
                maxAmount: joi.number().allow(null),
                maxAmountDaily: joi.number().allow(null),
                maxCountDaily: joi.number().integer().allow(null),
                maxAmountWeekly: joi.number().allow(null),
                maxCountWeekly: joi.number().integer().allow(null),
                maxAmountMonthly: joi.number().allow(null),
                maxCountMonthly: joi.number().integer().allow(null),
                credentials: joi.number().integer().allow(null),
                priority: joi.number().integer().allow(null)
            })),
            splitName: joi.array().items(joi.object().keys({
                splitNameId: joi.number().integer(),
                conditionId: joi.number().integer(),
                name: joi.string(),
                tag: joi.string().allow(null)
            })),
            splitRange: joi.array().items(joi.object().keys({
                splitRangeId: joi.number().integer(),
                splitNameId: joi.number().integer(),
                startAmount: joi.number(),
                startAmountCurrency: joi.string(),
                startAmountDaily: joi.number().allow(null),
                startCountDaily: joi.number().allow(null),
                startAmountWeekly: joi.number().allow(null),
                startCountWeekly: joi.number().allow(null),
                startAmountMonthly: joi.number().allow(null),
                startCountMonthly: joi.number().allow(null),
                isSourceAmount: joi.boolean().allow(null),
                minValue: joi.number().allow(null),
                maxValue: joi.number().allow(null),
                percent: joi.number().allow(null),
                percentBase: joi.number().allow(null)
            })),
            splitAssignment: joi.array().items(joi.object().keys({
                splitAssignmentId: joi.number().integer(),
                splitNameId: joi.number().integer(),
                debit: joi.string(),
                credit: joi.string(),
                minValue: joi.number().allow(null),
                maxValue: joi.number().allow(null),
                percent: joi.number().allow(null),
                description: joi.string()
            })),
            splitAnalytic: joi.array().items(
                joi.object().keys({
                    splitAnalyticId: joi.number().integer(),
                    splitAssignmentId: joi.number().integer(),
                    name: joi.string(),
                    value: joi.string().allow(null)
                })
            ),
            pagination: joi.array().items(
            joi.object().keys({
                pageSize: joi.number().integer(),
                recordsTotal: joi.number().integer(),
                pageNumber: joi.number().integer(),
                pagesTotal: joi.number().integer()
            })
        )
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.condition[0])
     * @return {joiObject} - joiValidation
     */
    validateEditRule: function(result) {
        var schema = joi.object().keys({
            condition: joi.array().items(joi.object().keys({
                conditionId: joi.number().integer().required(),
                priority: joi.number().integer().required(),
                channelCountryId: joi.number().allow(null),
                channelRegionId: joi.number().allow(null),
                channelCityId: joi.number().allow(null),
                channelOrganizationId: joi.number().allow(null),
                channelSupervisorId: joi.number().allow(null),
                channelTag: joi.string().allow(null),
                channelRoleId: joi.number().allow(null),
                channelId: joi.number().allow(null),
                operationId: joi.number().allow(null),
                operationTag: joi.string().allow(null),
                operationStartDate: joi.date().allow(null),
                operationEndDate: joi.date().allow(null),
                sourceCountryId: joi.number().allow(null),
                sourceRegionId: joi.number().allow(null),
                sourceCityId: joi.number().allow(null),
                sourceOrganizationId: joi.number().allow(null),
                sourceSupervisorId: joi.number().allow(null),
                sourceTag: joi.string().allow(null),
                sourceId: joi.number().allow(null),
                sourceCardProductId: joi.number().allow(null),
                sourceAccountProductId: joi.number().allow(null),
                sourceAccountId: joi.number().allow(null),
                destinationCountryId: joi.number().allow(null),
                destinationRegionId: joi.number().allow(null),
                destinationCityId: joi.number().allow(null),
                destinationOrganizationId: joi.number().allow(null),
                destinationSupervisorId: joi.number().allow(null),
                destinationTag: joi.string().allow(null),
                destinationId: joi.number().allow(null),
                destinationAccountProductId: joi.number().allow(null),
                destinationAccountId: joi.number().allow(null)
            })),
            conditionActor: joi.array(),
            conditionItem: joi.array(),
            conditionProperty: joi.array(),
            limit: joi.array().items(joi.object().keys({
                limitId: joi.number().integer(),
                conditionId: joi.number().integer(),
                currency: joi.string(),
                minAmount: joi.number().allow(null),
                maxAmount: joi.number().allow(null),
                maxAmountDaily: joi.number().allow(null),
                maxCountDaily: joi.number().integer().allow(null),
                maxAmountWeekly: joi.number().allow(null),
                maxCountWeekly: joi.number().integer().allow(null),
                maxAmountMonthly: joi.number().allow(null),
                maxCountMonthly: joi.number().integer().allow(null),
                credentials: joi.number().integer().allow(null),
                priority: joi.number().integer().allow(null)
            })),
            splitName: joi.array().items(joi.object().keys({
                splitNameId: joi.number().integer(),
                conditionId: joi.number().integer(),
                name: joi.string(),
                tag: joi.string().allow(null)
            })),
            splitRange: joi.array().items(joi.object().keys({
                splitRangeId: joi.number().integer(),
                splitNameId: joi.number().integer(),
                startAmount: joi.number(),
                startAmountCurrency: joi.string(),
                startAmountDaily: joi.number().allow(null),
                startCountDaily: joi.number().allow(null),
                startAmountWeekly: joi.number().allow(null),
                startCountWeekly: joi.number().allow(null),
                startAmountMonthly: joi.number().allow(null),
                startCountMonthly: joi.number().allow(null),
                isSourceAmount: joi.boolean().allow(null),
                minValue: joi.number().allow(null),
                maxValue: joi.number().allow(null),
                percent: joi.number().allow(null),
                percentBase: joi.number().allow(null)
            })),
            splitAssignment: joi.array().items(joi.object().keys({
                splitAssignmentId: joi.number().integer(),
                splitNameId: joi.number().integer(),
                debit: joi.string(),
                credit: joi.string(),
                minValue: joi.number().allow(null),
                maxValue: joi.number().allow(null),
                percent: joi.number().allow(null),
                description: joi.string()
            })),
            splitAnalytic: joi.array().items(
                joi.object().keys({
                    splitAnalyticId: joi.number().integer(),
                    splitAssignmentId: joi.number().integer(),
                    name: joi.string(),
                    value: joi.string().allow(null)
                })
            ),
            pagination: joi.array().items(
            joi.object().keys({
                pageSize: joi.number().integer(),
                recordsTotal: joi.number().integer(),
                pageNumber: joi.number().integer(),
                pagesTotal: joi.number().integer()
            })
        )
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result)
     * @return {joiObject} - joiValidation
     */
    validateDecisionLookup: function(result) {
        var schema = joi.object().keys({
            amount: joi.object().keys({
                acquirerFee: joi.number().required(),
                issuerFee: joi.number().required(),
                commission: joi.number().required(),
                transferDateTime: joi.date().required(),
                transferTypeId: joi.string().required()
            }).required(),
            split: joi.array().items(
                joi.object().keys({
                    conditionId: joi.number().integer(),
                    splitNameId: joi.number().integer(),
                    tag: joi.string(),
                    amount: joi.number(),
                    debit: joi.string(),
                    credit: joi.string(),
                    description: joi.string(),
                    analytics: joi.object().allow(null)
                })).required(),
            maskCheck: joi.object().keys({
                checkAmount: joi.number().allow(null),
                checkMask: joi.number().integer().allow(null)
            }).allow(null)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
