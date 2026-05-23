function intersection(arr1,arr2){
    let i=0
    let j =0
    let afterintersect=[]
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]!= arr2[j]){
            i++
        }else if(arr1[i] == arr2[j]){
            afterintersect.push(arr2[j])
            j++
        }
    }
return afterintersect

}
console.log(intersection([1,2,2,3,3,4,5,6],[2,3,3,5,6,6,7]))
