var countKDifference = function(nums, k) {
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(k == Math.abs(nums[i]-nums[j]))
            {
               return 1;
            }
        }
    }
    return 0;
};

console.log(countKDifference([3,2,1,5,4],2)); //return 1
console.log(countKDifference([3,2,1,5,4],5)); //return 0

//Time complexity is O(n*(n-1))
//Space complexity is O(1)