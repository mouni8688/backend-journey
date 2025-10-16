let arr1=[1,2,3,4,5,6,7,1,2,3];
let arr2=[1,2,3];
let sum=0;

function sum(arr1){
    for(let i=0;i<arr1.length;i++){
        sum+=arr[i];
    }
    console.log("sum",sum);
}

function findMin(arr1){
    min=arr1[0];
    for(let num of arr1){
        if(num<min){
            min=num;
        }
    }
    console.log("Min s: ",min);
}

function findDuplicates(arr1){
    let duplcates=[];
    for(let i=0;i<arr1.length;i++){
        for(j=i+1;j<arr1.length;j++){
            if(arr1[i]==arr[j] && !duplcates.contains(arr1[i])){
                duplcates.push(arr1[i])
            }
        }
    }
    console.log("Duplcates ",duplcates);  
}

