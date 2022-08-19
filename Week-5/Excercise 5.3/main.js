const hasDuplicate = arr => new Set(arr).size !== arr.length
console.log(hasDuplicate([1,5,-1,1]))// false

