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
}

console.log(nextGreaterElements([6,8,0,1,3]));*/