module.exports = {
    addRuleParams: function(context, contextStep) {
        return {
            condition: {
                priority: contextStep(context).condition.priority,
                channelCountryId: contextStep(context).condition.channelCountryId,
                channelRegionId: contextStep(context).condition.channelRegionId,
                channelCityId: contextStep(context).condition.channelCityId,
                channelOrganizationId: contextStep(context).condition.channelOrganizationId,
                // channelSupervisorId:
                channelTag: contextStep(context).condition.channelTag,
                // channelRoleId:
                channelId: contextStep(context).condition.channelId,
                // operationId:
                operationTag: contextStep(context).condition.operationTag,
                operationStartDate: contextStep(context).condition.operationStartDate,
                operationEndDate: contextStep(context).condition.operationEndDate,
                sourceCountryId: contextStep(context).condition.sourceCountryId,
                sourceRegionId: contextStep(context).condition.sourceRegionId,
                sourceCityId: contextStep(context).condition.sourceCityId,
                // sourceOrganizationId:
                // sourceSupervisorId:
                sourceTag: contextStep(context).condition.sourceTag,
                // sourceId:
                // sourceCardProductId:
                // sourceAccountProductId:
                // sourceAccountId:
                destinationCountryId: contextStep(context).condition.destinationCountryId,
                destinationRegionId: contextStep(context).condition.destinationRegionId,
                destinationCityId: contextStep(context).condition.destinationCityId,
                // destinationOrganizationId:
                // destinationSupervisorId:
                destinationTag: contextStep(context).condition.destinationTag
                // destinationId:
                // destinationAccountProductId:
                // destinationAccountId:
            },
            limit: [{
                currency: contextStep(context).limit.currency, // mandatory
                minAmount: contextStep(context).limit.minAmount,
                maxAmount: contextStep(context).limit.maxAmount,
                maxAmountDaily: contextStep(context).limit.maxAmountDaily,
                maxCountDaily: contextStep(context).limit.maxCountDaily,
                maxAmountWeekly: contextStep(context).limit.maxAmountWeekly,
                maxCountWeekly: contextStep(context).limit.maxCountWeekly,
                maxAmountMonthly: contextStep(context).limit.maxAmountMonthly,
                maxCountMonthly: contextStep(context).limit.maxCountMonthly
            }],
            split: {
                data: {
                    rows: [{
                        splitName: {
                            name: contextStep(context).splitName.name,
                            tag: contextStep(context).splitName.tag
                        },
                        splitRange: [{
                            isSourceAmount: contextStep(context).splitRange.isSourceAmount,
                            maxValue: contextStep(context).splitRange.maxValue,
                            minValue: contextStep(context).splitRange.minValue,
                            percent: contextStep(context).splitRange.percent,
                            startAmount: contextStep(context).splitRange.startAmount, // mandatory
                            startAmountCurrency: contextStep(context).splitRange.startAmountCurrency // mandatory
                        }],
                        splitAssignment: [{
                            credit: contextStep(context).splitAssignment.credit, // dropdown - where to fetch? TODO in standard is not a dropdown
                            debit: contextStep(context).splitAssignment.debit, // dropdown - where to fetch? TODO in standard is not a dropdown
                            description: contextStep(context).splitAssignment.description,
                            maxValue: contextStep(context).splitAssignment.maxValue,
                            minValue: contextStep(context).splitAssignment.minValue,
                            percent: contextStep(context).splitAssignment.percent
                        }]
                    }]
                }
            }
        };
    }
};
