const crypto = require('crypto');



const getCrypto = () =>{
    return crypto.randomUUID();
}

module.exports = {
    getCrypto
}