// Rotating Array

const rotate= function(nums,k){
    for(let i = nums.length-1;i>=0;i--){
        nums[i+k]=nums[i];
    }
    for(let i = k-1;i>=0;i--){
        nums[i]=nums.pop();
    }
    return nums;
}