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
        if(cache.has(Key))
        {
            return cache.get(Key)
        }

        cache.set(Key,fn(...args))
        return cache.get(Key)        
     }
}

//Memoize function
const memoizeAdd = memoize(add);

//Calling Function
memoizeAdd(100,100);
memoizeAdd(100);
memoizeAdd(100,200);
memoizeAdd(100,100);