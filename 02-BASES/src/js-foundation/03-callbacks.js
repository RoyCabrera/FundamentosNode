const users = [
    {
        id:1,
        name:"Andy"
    },
    {
        id:2,
        name:"Roy"
    }
]


const getUserById = (id, callback) => {
    const user = users.find((user)=>{
        return user.id === id;
    });
    if(!user){
        return callback(`User with id ${id} not found`);
    }
    return callback(null, user);
}

const getUserByName = (name,error)=>{
    const user = users.find(user=> user.name === name);
    
    (user)
        ? error(null,user)
        :error("Usuario no encontrado")

}

module.exports = {
    getUserById,
    getUserByName
}