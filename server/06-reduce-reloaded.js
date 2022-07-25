//este algoritmo sirve para identificar la cantidad de números en el objeto

const data = [1,1,2,3,4,4,4,4,5,6,7,8,9,10,11,12,12,14,15,16,16,16,17,18,19,20,20,21,23,21,22,24,25,26,27,28,29,29,30,];

const rta = data.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rta);
// .map(item => item.level)

const arr = [1,1,1,1,1,2,2,2,2,3,3,3,4,5,6,7,8,8,8,8,9,9,9,10,10,10];

const result = arr.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5']++
  } else if (item <= 8) {
    obj['6-8']++
  } else {
    obj['9-10']++
  }
  return obj
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0
})

console.log(result);