//time complexity is O(n)
//space complexity is O(n)

var isValid = function(s) {
    let stack = [];
    for(let i = 0;i<s.length;i++)
    {
        console.log(s[i]);
        if(s[i] === '(' || s[i] === '{' || s[i] === '[')
           stack.push(s[i]);
        else
        {
            if(stack.length !== 0)
            {
                let temp = stack.pop(); 
                console.log(temp);
                if(temp === '(' && s[i] !== ")" ||
                   temp === '{' && s[i] !== "}" ||
                   temp === '[' && s[i] !== "]")
                     return false;
            }
            else
                return false;
        }
        console.log(stack)
    }
    if(stack.length === 0)
       return true;
    return false;
  };