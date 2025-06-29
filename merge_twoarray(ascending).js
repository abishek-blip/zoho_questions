var arr1 = [2,4,5,6,7,9,10,13]
var arr2 = [2,3,4,5,6,7,8,9,11,15]
var result = arr1
for(var i = 0; i < arr2.length; i++)
{
    var found = false
    for(var j = 0; j < result.length; j++)
    {
        if(arr2[i] == result[j])
        {
            found = true
            break
        }
    }
    if(found == false)
    {
        result.push(arr2[i])
    }
}
for(var k = 0; k < result.length; k++)
{
    for(var l = k + 1; l < result.length; l++)
    {
        if(result[k] > result[l])
        {
            var temp = result[k]
            result[k] = result[l]
            result[l] = temp
        }
    }
}
console.log(result);


/*
var arr1 = [2, 4, 5, 6, 7, 9, 10, 13];
var arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 11, 15];

var result = [];
var i = 0;
var j = 0;

// Simulate while(i < arr1.length && j < arr2.length) using for loop
for (; i < arr1.length && j < arr2.length;) {
    if (arr1[i] === arr2[j]) {
        if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
            result.push(arr1[i]);
        }
        i++;
        j++;
    } else if (arr1[i] < arr2[j]) {
        if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
            result.push(arr1[i]);
        }
        i++;
    } else {
        if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
            result.push(arr2[j]);
        }
        j++;
    }
}

// Remaining elements in arr1
for (; i < arr1.length; i++) {
    if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
    }
}

// Remaining elements in arr2
for (; j < arr2.length; j++) {
    if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
        result.push(arr2[j]);
    }
}

// Print result
var output = "";
for (var k = 0; k < result.length; k++) {
    output += result[k];
    if (k < result.length - 1) {
        output += ", ";
    }
}
console.log("Merged array: " + output);
*/