//function add(x, y) {
 // return x + y;
//}

//module.exports = {
 // add,
//}


function removeEven(numbers) {
  return numbers.filter(number => number % 2 !== 0);// What we did here is simply return numbers and then use the filter function, number, arrow function, mod% 2 does not !== 0). what this is going to do is filter out all of the different numbers that are even and remove them from our array and return a new array to us.

}

module.exports = {
  removeEven,
};

