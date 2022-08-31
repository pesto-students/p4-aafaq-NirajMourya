function vowelCount(str){
    const vowelMap = new Map();
    const vowels = "aeiou";
    str = str.toLowerCase();
    for(let char of vowels){  
        var count = (str.match(new RegExp(char, "g")) || []).length;
        if(count > 0)
           vowelMap.set(char,count);
    }
    return vowelMap;
}

console.log(vowelCount("abcde"));