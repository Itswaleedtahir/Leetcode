//squares of  the array and non-descending

const sortedSquares=(A)=>{
    let result=[]
    let start = 0
    let end = A.length-1
    let position = end

    while(start<=end){
        if(A[start]**2>A[end]**2){
            result[position--]=A[start++]**2
        }else{
            result[position--]=A[end--]**2
        }
    }
    return result
}