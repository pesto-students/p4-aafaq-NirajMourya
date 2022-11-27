var sortArray = function(nums) {
    let zeroEnd = 0;
    let TwoStart = nums.length-1;
    for(let i=0;i<=TwoStart;i++)
    {
        if(nums[i] == 0)
        {    
            nums[zeroEnd] = [nums[i], nums[i] = nums[zeroEnd]][0];
            zeroEnd++;
        }
        else if (nums[i] == 2)
        {
            nums[TwoStart] = [nums[i], nums[i] = nums[TwoStart]][0];
            TwoStart--;
            i--;
        }
    }
};


//Time complexity is O(n)
//Space complexity is O(1)