
const {getAge,getCrypto} = require('../plugins')

const buildPerson = ({name,birthdate}) =>{

    return{
        id: getCrypto(),
        name:name,
        birthdate:birthdate,
        age: getAge(birthdate)
    }

}

/* const obj = {
    name:"Roy",
    birthdate:"1996-12-28"
}

const Roy = buildPerson(obj)
console.log(Roy); */

module.exports = {
    buildPerson,
}