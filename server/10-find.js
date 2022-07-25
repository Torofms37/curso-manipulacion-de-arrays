const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
  
const rta = products.find(item => item.id === '🥞')
console.log('find', rta);

const rta2 = products.findIndex(item => item.id === '🌭')
console.log('findIndex', rta2);