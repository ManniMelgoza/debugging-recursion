/***********************************************************************
We've done most of the work for you below, but something's not quite
right. Refactor the problem below to avoid a stack overflow and save
the day!

When fixed, this function should behave similarly to JavaScript's '.map()'
function.

Examples:

***********************************************************************/

//Function is a function style that passes two parameters(array, function)
function doForAll(arr, action) {
  //BASE CASE:
  //check if the length of the array is 0, when its true
  if(arr.length === 0){
    // the arr will be returned
    return arr;
  }
  //Recursice case

  // for every iteration that the if statement is not true
  //The return of the recursion will take the first value in arr
  //doForAll function will then slice the value and then call the action function
  //By slicing it will make the arr being checked true. 
  return [action(arr[0]), ...doForAll(arr.slice(1), action)];
};

console.log(doForAll([], (x) => x * 2)); // => []
console.log(doForAll([1, 2, 3], (x) => x + 1)); // => [2, 3, 4]
console.log(doForAll(["a", "b", "c"], (x) => x.toUpperCase())); // => ["A", "B", "C"]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = doForAll;
