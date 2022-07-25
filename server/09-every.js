 const num = [1,30,49,29,10,13];

 let rta = true;
 for (let index = 0; index < num.length; index++) {
     const element = num[index];
     if(element >= 40) {
         rta = false
     }
 }
 console.log('for', rta);

 const rta2 = num.every(item => item <= 40)
 console.log('rta', rta2);


// 
 const team = [
     {
       name: "Nicolas",
       age: 12,
     },
     {
       name: "Andrea",
       age: 8,
     },
     {
       name: "Zulema",
       age: 2,
     },
     {
       name: "Santiago",
       age: 18,
     },
   ];

   const mayoresDeEdad = team.map(item => item.age)
   .every(age => age <= 15)
   console.log('¿Hay mayores de 15 años en este grupo?:', mayoresDeEdad);
