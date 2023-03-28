/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let na = numbers.length
    for(let i =0; j=na-1;i<j){
        let sum= numbers[i]+numbers[j];
        if(sum===target){
            return [i+1,j+1]
        }else if(sum<target){
            i++
        }else{
            j--
        }
    }
    return[-1,-1]
};