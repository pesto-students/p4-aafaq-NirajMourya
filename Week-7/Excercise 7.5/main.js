import Stack from '../CommonCode/stack.js'
//time complexity is O(n)
//space complexity is O(n)
function nextGreaterElements(nums)
{
    let stack = new Stack();
    let GreaterArray = new Array(nums.length).fill(-1);
    for(let i = 0;i<nums.length;i++)
    {
        if (stack.isEmpty()) {
            stack.push(i);       // Pushing the index
            continue;
        }
        if (nums[i] <= nums[stack.peek()]) 
        {
            stack.push(i)
        }
        else 
        { 
            while(!stack.isEmpty() && nums[i] > nums[stack.peek()])
            {
                GreaterArray[stack.peek()] = nums[i];
                stack.pop();
            }
            stack.push(i);
        }
    }
    return GreaterArray;
}


//Below code is the naive attempt at solving the issue
//time complexity is O(n*n)
//space complexity is O(n)
/*function nextGreaterElements(nums)
{    
    let GreaterArray = [];
    for(let i = 0;i<nums.length;i++)
    {
        for(var j = i+1;j<nums.length;j++)
        {
            if(nums[j]>nums[i])
            {
               GreaterArray.push(nums[j]);
               break; 
            }
        }
        if(j == nums.length)
        {
           GreaterArray.push(-1);
        }
    }
    return GreaterArray;
}*/

console.log(nextGreaterElements([6,5,4,3,7]));