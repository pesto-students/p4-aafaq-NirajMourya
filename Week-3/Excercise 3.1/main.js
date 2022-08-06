//Reducer method:
function add(a,b)
{
    return a+b;
}

//Memoize function
const memoizeAdd = memoize(add);

//Calling Function
memoizeAdd(100,100);
memoizeAdd(100);
memoizeAdd(100,200);
memoizeAdd(100,100);