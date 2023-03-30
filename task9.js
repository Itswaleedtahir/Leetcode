// Is Subsequence

const equal = function(s,t){
    if(s.length>t.length)return  false;
    const t_length=t.length;
    let sub=0
    for(let i=0 ; i<t_length ; i++){
        if(s[sub]===t[i]){
            sub++
        }
    }
    return sub === s.length
}