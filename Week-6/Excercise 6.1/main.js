var maxSubArray = function(nums) {
    MaxSum = nums[0];
    curSum = 0
    for(let i=0;i<nums.length;i++)
    {
        if(curSum < 0)
            curSum = 0;
        curSum += nums[i];
        if(curSum > MaxSum)
            MaxSum = curSum;       
    }
    return MaxSum;
};

//Time complexity is O(n)
//Space complexity is O(1)