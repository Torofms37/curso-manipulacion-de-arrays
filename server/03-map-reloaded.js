// trabajar con objetos y map a la vez, no copiar los objetos de memoria, sino una totalmente nueva


// console.log('original', consoleDeVideoJuegos);
// const rta = consoleDeVideoJuegos.map((item) => item.totalPrice)
// console.log('rta', rta);

// const rta2 = consoleDeVideoJuegos.map((item) => {
//     item.tax = 0.19;
//     return item;
// });
// console.log('rta2', rta2);
    
const array = [
    {
        nameConsole: 'Playstation',
        totalPrice: 1000,
        delivered: true,
    },
    {
        nameConsole: 'PcGamer',
        totalPrice: 20000,
        delivered: true,
    },
];

const newArray = array.map(item => {
    return {
        ...item,
        taxes: Math.trunc( item.totalPrice * 0.19 ),
    };
});
console.log('original price', array);
console.log('Taxes: ', newArray);

//////

const fruta = [
    {
    nameFruit: 'Melon',
    price: 100,   
    }
];

const newArrray  = fruta.map(item1 => {
    return {
        ...item1,
        tax: Math.trunc( item1.price * 0.19 ),
    };
});

console.log('Fruta a comprar: ', fruta);
console.log('Taxes incluidos: ', newArrray);
