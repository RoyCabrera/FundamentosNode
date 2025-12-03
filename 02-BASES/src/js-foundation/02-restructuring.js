//console.log(process.env.LESS)

//const {SHELL,LOGNAME,COLORTERM} = process.env;
// const superHeroes = ['Batman','Flash',5];

// const [a,b,c]= superHeroes;

// console.log(SHELL,LOGNAME,COLORTERM);
// console.table({SHELL,LOGNAME,COLORTERM});
// console.table({a,b,c});
// console.log(b);


const {SHELL} = process.env;
const cosas = ["pelota","carro","cuadro"]
const [g,f,h] = cosas;
console.table({SHELL});

console.table({g,f});
