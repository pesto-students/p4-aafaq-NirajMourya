const hasDuplicate = arr => new Set(arr).size !== arr.length
//Below code has better space complexity as it does not use set to copy data of array
/*const hasDuplicate = (arr) => { return arr.some((element, index) =>{
    return arr.indexOf(element) !== index
});
 } */
console.log(hasDuplicate([1,5,-1,1]))// true
console.log(hasDuplicate([1,5,-1,11]))// false


