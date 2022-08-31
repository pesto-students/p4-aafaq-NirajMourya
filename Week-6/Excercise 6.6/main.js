var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let ClosestSum = Infinity;
    for(let i = 0;i<nums.length-2;i++)
    {        
         let left = i+1,right = nums.length - 1;
         while(left<right)
         {
             let tempSum = nums[i] + nums[left] + nums[right];
             if(Math.abs(tempSum - target) < Math.abs(ClosestSum - target))
             {
                ClosestSum = tempSum;
             }
             if(tempSum > target)
             {
                right--;
             }
             else
             {
                 left++
             }
         }
    }
   return ClosestSum;
};

//Time complexity is O(n^2)
//Space complexity is O(1)