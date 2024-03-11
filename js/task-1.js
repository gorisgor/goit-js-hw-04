function isEnoughCapacity(products, containerSize) {
let sumProducts;
const productsArray = Object.values(products);
console.log("🚀 ~ isEnoughCapacity ~ productsArray:", productsArray)
    for (let index = 0; index < productsArray.length; index++) {
      sumProducts += productsArray[index];
    } 
  return sumProducts;
}



console.log(
   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
 ); // true
 
 console.log(
   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
 ); // false
 
 console.log(
   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
 ); // true
 
 console.log(
   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
 ); // false
