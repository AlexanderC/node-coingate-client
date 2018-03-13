'use strict';
const crypto = require('crypto');

var generateSignature = exports.generateSignature = function (appID, apiKey, apiSecret) {
    var nonce = getNonce();
    var message = getMessage(appID, apiKey, nonce);
    return crypto.createHmac('SHA256', apiSecret)
        .update(message)
        .digest('hex');
};

var getMessage = exports.getMessage = function (appID, apiKey, nonce) {
    return nonce + appID.toString() + apiKey;
};

var getNonce =  exports.getNonce = function getNonce () {
    var date = new Date();
    return date.getTime().toString();
};
