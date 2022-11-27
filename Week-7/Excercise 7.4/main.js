//time complexity is O(n)
//space complexity is O(n)
import Stack from '../CommonCode/stack.js'

var isValid = function(s) {
    let stack = new Stack();
    for(let i = 0;i<s.length;i++)
    {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[')
           stack.push(s[i]);
        else
        {
            if(stack.size !== 0)
            {
                let temp = stack.pop(); 
                if(temp === '(' && s[i] !== ")" ||
                   temp === '{' && s[i] !== "}" ||
                   temp === '[' && s[i] !== "]")
                     return false;
            }
            else
                return false;
        }
    }
    if(stack.isEmpty())
       return true;
    return false;
  };

  console.log(isValid("{[]}{()}"));