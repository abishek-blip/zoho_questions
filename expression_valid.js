var input = "((abc)((de)))))"
var arr1 = [];
var arr2 = [];

for(i=0; i<input.length;i++){
    arr1[i]= true
}
console.log(arr1,"test1")

for(j=0; j<input.length;j++){
    var ch = input[j]
    if(ch == '('){
        arr2.push(j)
    }else if(ch == ')'){
        if(arr2.length>0){
            arr2.pop()
        }else{
        arr1[j]= false
        }
    }
}

while(arr2.length>0){
    var index = arr2.pop()
    arr1[index] =false
}

console.log(arr1,"test")
var result =''
for(k=0;k<input.length;k++){
    if(arr1[k]){
        result += input[k]
    }
}

console.log(result)