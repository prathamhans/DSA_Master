function max(arr) {
    let max= -Infinity
    let secondmax=  -Infinity
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            secondmax=max
            max= arr[i]
        }else if(arr[i]>secondmax && arr[i]!=max){
            secondmax=arr[i]
        }
    }
    return secondmax
    
}


console.log(max([3,4,6,77,23,2]))

