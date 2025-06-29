var arr = [-2, -3, 4, -1, -2, 1, 5, -3];
var sum = 0, res = [];
var start_ind = -1, end_ind = -1;

for (var i = 0; i < arr.length; i++) 
{
    if (arr[i] > 0) 
    {
        start_ind = i;
        break;
    }
}

for (var j = arr.length - 1; j >= 0; j--) 
{
    if (arr[j] > 0) 
    {
        end_ind = j;
        break;
    }
}

if (start_ind !== -1 && end_ind !== -1 && start_ind <= end_ind) 
{
    for (var k = start_ind; k <= end_ind; k++) 
    {
        sum += arr[k];
        res.push(arr[k]);
    }
} 
else
{
    console.log("No positive numbers found or invalid range.");
}
console.log("Sum:", sum);
console.log("Elements:", res);




//2
var arr = [-2, -3, 4, -1, -2, 1, 5, -3];
var sum = 0, res = [];
var start_ind = -1, end_ind = -1;

// Find first and last positive indices
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && start_ind === -1) start_ind = i;
    if (arr[arr.length - 1 - i] > 0 && end_ind === -1) end_ind = arr.length - 1 - i;
    if (start_ind !== -1 && end_ind !== -1) break;
}

// Proceed only if valid positive segment found
if (start_ind !== -1 && end_ind !== -1 && start_ind <= end_ind) {
    for (var i = start_ind; i <= end_ind; i++) {
        sum += arr[i];
        res.push(arr[i]);
    }
}

console.log("Sum:", sum);
console.log("Elements:", res);
