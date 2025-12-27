const {getAge} = require('../plugins/get-age.plugin');
const {getCrypto} = require('../plugins/uuid.plugin');
const {http} = require('../plugins/http-client-plugin');
const buildLogger = require('../plugins/logger.plugin');

module.exports ={
    getAge,
    getCrypto,
    http,
    buildLogger
}

