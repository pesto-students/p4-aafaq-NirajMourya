//Reducer method:
function add(a,b)
{
    return a+b;
}

//Defining memoize function
function memoize(fn)
{
    const cache = new Map();
     return function(...args)
     {
        const key = args.toString();
        if(cache.has(key))
        {
            return cache.get(key)
        }

        cache.set(key,fn(...args))
        return cache.get(key)        
     }
}

//Memoize function
const memoizeAdd = memoize(add);

//Calling Function
console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100,200));
console.log(memoizeAdd(100,100));