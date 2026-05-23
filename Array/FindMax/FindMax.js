function max(arr) {
    let max=0
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max= arr[i]
        }
    }
    return max
}


console.log(max([3,4,6,77,23]))