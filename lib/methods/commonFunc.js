var crypto = require('crypto');
var seed = Array.from({length: 15})
    .fill(0)
    .map(e => Math.random().toString().split('.').pop())
    .join('')
    .slice(-15);

function next() {
    seed += 1;
    return seed;
}

module.exports = {
    /**
     * @return {number} Random number
     */
    generateRandomNumber: function() {
        return next();
    },
    /**
     * @return {string} Random email
     */
    generateRandomEmail: function() {
        return 'automationUser_' + next() + '@sg-bg.com';
    },
    /**
     * @param {string} base - symbols to return from
     * @params {number} stringlength - length of the string
    * @return {string} Random characters
    */
    generateRandomChars: function(base, stringlength) {
        var text = '';

        for (var i = 0; i < stringlength; i++) {
            text += base.charAt(Math.floor(Math.random() * base.length));
        }

        return text;
    },
    /**
     * @param {string} base - string to return from
    * @return {string} partial string from specific string
    */
    generatePartialSearchData: function(base) {
        var partData;
        var partData1;
        var partData2;
        if (typeof base === 'string') {
            partData1 = base.slice(0, 3);
            return partData1;
        } else if (Number.isInteger(base)) {
            partData = base.toString();
            partData1 = partData.slice(0, 3);
            partData2 = parseInt(partData1);
            return partData2;
        } else {
            return false;
        }
    },
    /**
     * @param {number} start - number to start from
     * @param {number} end - number to end with the generated array
     * @return {array} - generated array with numbers from 0 to n
     */
    generateNumberArray: function(start, end) {
        var array = [];
        for (var i = start; i <= end; i++) {
            array.push(i.toString());
        }
        return array;
    },
    /**
    * @return {string} Random policyName
    */
    returnRandomPolicyName: function() {
        return 'AP-' + next();
    },
    /**
     * @param {string} method - method name
     * @param {string} name - step name
     * @param {function} paramsFunction - params for the request (contextFunction({username: sa, password: 123}))
     * @param {function} resultHandler - assertions for the result ((result, assert) => {asserts})
     * @param {function} errorHandler - assertions for the error ((error, assert) => {asserts})
     */
    createStep: function(method, name, paramsFunction, resultHandler, errorHandler) {
        return {
            method: method,
            name: name,
            params: paramsFunction,
            result: resultHandler,
            error: errorHandler
        };
    },
    /**
     * @param {date} date - Date.now() or Date.now() + 1000 * 60 * 60 * 24
     *  @return {string} todays date in format yyyy-mm-dd
     */
    getFormattedDate: function(date) {
        var today = new Date(date);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; // January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return yyyy + '-' + mm + '-' + dd;
    },
    /**
     * return random date - randomDate(new Date(1980, 0, 1), new Date())
     */
    randomDate: function(start, end) {
        return this.getFormattedDate(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));
    },
    /**
     * @return {string} Random GUID number
     */
    generateRandomGuid: function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    /**
     * @param {string} ipAddress - 192.168.1.1
     * @param {int} position - 192.168.1.1 - 192 is 0, 168 is 1 etc.
     * @return {string} IncreasedIP
     */
    increaseIP: function(ipAddress, position) {
        var ipsplit = ipAddress.split('.');
        ipsplit[position]++;
        return ipsplit.join('.');
    },
    /**
     * @param {string} ipAddress - 192.168.1.1
     * @param {int} position - 192.168.1.1 - 192 is 0, 168 is 1 etc.
     * @return {string} DecreasedIP
     */
    decreaseIP: function(ipAddress, position) {
        var ipsplit = ipAddress.split('.');
        ipsplit[position]--;
        return ipsplit.join('.');
    },
    /**
     * @param {array} - result to look in
     * @param {property} - string property to sort by
     * @param {boolean} isASC 0, 1
     * @return {boolean}
     */
    compareOrderString: function(result, property, isASC) {
        var i, len;
        for (i = 0, len = result.length - 1; i < len; i += 1) {
            // compares the asc and desc order according to javascript localeCompare, but exclude strings that contain '-', because ms sql and javascript sorts special symbols differently
            if (((result[i][property] || '').localeCompare(result[i + 1][property] || '') === (isASC ? 1 : -1)) && result[i][property].indexOf('-') === -1 && result[i + 1][property].indexOf('-') === -1) {
                return false;
            }
        }
        return true;
    },
    /**
     * @param {result} - result to look in
     * @param {property} - string property to sort by
     * @param {boolean} isASC 1, 0
     * @return {bool}
     */
    compareOrderDate: function(result, property, isASC) {
        var i, len;
        if (isASC === 1) {
            for (i = 0, len = result.length - 1; i < len; i += 1) {
                if (new Date(result[i][property]) > new Date(result[i + 1][property])) {
                    return false;
                }
            }
            return true;
        } else {
            for (i = 0, len = result.length - 1; i < len; i += 1) {
                if (new Date(result[i][property]) < new Date(result[i + 1][property])) {
                    return false;
                }
            }
            return true;
        }
    },
    /**
     * @param {result} - result to look in
     * @param {property} - string property to sort by
     * @param {string} isASC 1, 0
     * @return {bool}
     */
    compareOrderNumber: function(result, property, isASC) {
        var i, len;
        if (isASC === 1) {
            for (i = 0, len = result.length - 1; i < len; i += 1) {
                if (parseInt(result[i][property] || 0) > parseInt(result[i + 1][property] || 0)) {
                    return false;
                }
            }
            return true;
        } else {
            for (i = 0, len = result.length - 1; i < len; i += 1) {
                if (parseInt(result[i][property] || 0) < parseInt(result[i + 1][property] || 0)) {
                    return false;
                }
            }
            return true;
        }
    },
    /**
     * @param {number} - the number which will be rounded
     * @param {precision} - how many digits after the decimal place
     * @return {number} - example: number 3.565, precision 2 will round the number to 3.57
     */
    roundNumber: function(value, precision) {
        return +(Math.round(value + 'e+' + precision) + 'e-' + precision);
        // // Shift
        // value = value.toString().split('e');
        // value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + precision) : precision)));
        // // Shift back
        // value = value.toString().split('e');
        // return +(value[0] + 'e' + (value[1] ? (+value[1] - precision) : -precision));
    },
    /**
     * @param value - PIN to encrypt
     * @param key - encryption key
     * @result - encryptedPIN
     */
    encrypt: function(value, key) {
        const encryptionKeyBuffer = Buffer.from(key, 'base64');
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-ctr', encryptionKeyBuffer, iv);
        var encryptedPin = cipher.update(value, 'utf8', 'base64');
        encryptedPin += cipher.final('base64');
        return iv.toString('base64') + encryptedPin;
    },
    /**
     * @param length - length of the integer
     * @result - randomFixedInteger
     */
    generateRandomFixedInteger: function(length) {
        return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
    }
};
