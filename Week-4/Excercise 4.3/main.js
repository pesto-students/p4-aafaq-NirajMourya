const Fib = (n) => ({
    [Symbol.iterator]: () =>
    {
        let i = 1;
        let num1 = 0, num2 = 0;
        return{
            next()
            {
                 if(i++ <= n)
                 {
                    [num1,num2] = [num2, (num1 + num2) || 1]
                    return { value:num1, done:false}
                 }
                 else
                 {
                    return {done:true}
                 }
            }
        }
    }
});

console.log(...Fib(10));