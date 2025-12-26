//const {emailTemplate} = require('./js-foundation/01-template.js');
//require('./js-foundation/02-destructuring.js')

//const { getUserById, getUserByName } = require('./js-foundation/03-callbacks.js');


//require('./js-foundation/03-callbacks.js')

/* const name = "Roy"
const id = 2; */


/* getUserById(id,(error,user)=>{
    if(error){
        throw new Error(error);
    }

    console.log({user});
    
}) */

/* getUserByName(name,(error,user)=>{
    if(error){
        throw new Error(error)
    }
    console.log({user});
    
}) */
//console.log(emailTemplate)


/* const {buildPerson} = require('./js-foundation/05-factory') */


const getPokemonById = require('./js-foundation/06-promises')

getPokemonById(99)
    .then((pokemon)=>{
        console.log({pokemon});
        
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>{
        console.log('Finalmente');
        
    })
    




