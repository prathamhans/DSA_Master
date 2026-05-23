function missing(arr){
    
    for(let i=1;i<=arr.length;i++){
        let found=0
        for(let j=0;j<arr.length;j++){
            if(arr[j]==i){
                found=1
                break
            }
        }
        if(found==0){
            return i
        }
    }
    

}


console.log(missing([1,3,5,2]))



