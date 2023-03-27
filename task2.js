//First bad version

var solution = function(isBadVersion){
    return function(n){
        let low = 0
        let high = n
        while(low<=high){
            let mid = Math.floor((low+high)/2)
            let bad = isBadVersion(mid)
            if(bad){
                if(!isBadVersion(mid-1)){
                    return mid
                }
                high = mid-1
            }else if(!bad){
                low = mid +1
            }
        }
    }
}