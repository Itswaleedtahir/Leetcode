// Shifting Zeros

const removeZero=function(nums){
    let end = nums.length-1
    for(let i =end;i>=0;i--){
        if(nums[i]===0){
            nums.splice(i,1)
            nums.push(0)
        }
    }
    return nums
}