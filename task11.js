const reverse = function(head){
    let priv,cur=head,next
    while(cur){
        next = cur.next
        cur.next = priv;
        priv = next
        cur = next
    }
    return priv
}