const users = [
    {
        id:12,
        name:"Roy",
        age:28
    },
    {
        id:14,
        name:"Andy",
        age:30
    }
]

function getUserByName(name){
    const user = users.find(n => n.name === name)
    console.log({user})
}

getUserByName("Roy")