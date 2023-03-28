
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

// more optimized

var su = function(numbers ,taargets){
    let l =0
    r=numbers.length-1
    while(l<r){
        let sum = numbers[l]+numbers[r]
        if(sum===target)break;
        else if(sum>target)r--
        else l++
    }
    return [l+1,r+1]
}