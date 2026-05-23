function missing(arr,n){
    let sumofgivenarray=0
    let final= n*(n+1)/2
    for(let i=0;i<arr.length;i++){
        sumofgivenarray+= arr[i]
    }
    let findmissing= final- sumofgivenarray
    return findmissing
}


console.log(missing([1,3,5,2],5))



