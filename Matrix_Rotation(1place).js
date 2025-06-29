var mat =  [[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]]
var result=[]
for(var i = 0; i < mat.length; i++)
{
    var temp = []
    for(var j = 0; j < mat.length; j++)
    {
        temp.push(0)
    }
    result.push(temp)
}

var top = 0
var right = mat.length - 1
var bottom = mat.length - 1
var left = 0

while(top <= bottom && left <= right)
{
    result[top][top] = mat[top+1][top]
    for(var i = top; i < right; i++)
    {
        result[top][i+1] = mat[top][i]
    }
    top++
    
    for(var j = top; j <= bottom; j++)
    {
        result[j][right] = mat[j-1][right]
    }
    right--
    
    for(var k = right; k >= left; k--)
    {
        result[bottom][k] = mat[bottom][k+1]
    }
    bottom--
    
    for(var l = bottom; l >= top; l--)
    {
        result[l][left] = mat[l+1][left]
    }
    left++
}
console.log(result);




// var mat = [ 
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12],
//   [13,14,15,16]
// ];

// var n = mat.length;
// var m = mat[0].length;

// var result = [];

// // Step 1: Deep copy mat into result using push only
// for (var i = 0; i < n; i++) {
//     var row = [];
//     for (var j = 0; j < m; j++) {
//         row.push(mat[i][j]);
//     }
//     result.push(row);
// }

// // Step 2: Store outer layer in array `temp`
// var temp = [];
// // top row
// for (var i = 0; i < m; i++) {
//     temp.push(mat[0][i]);
// }
// // right column
// for (var i = 1; i < n; i++) {
//     temp.push(mat[i][m - 1]);
// }
// // bottom row (right to left)
// for (var i = m - 2; i >= 0; i--) {
//     temp.push(mat[n - 1][i]);
// }
// // left column (bottom to top)
// for (var i = n - 2; i > 0; i--) {
//     temp.push(mat[i][0]);
// }

// // Step 3: Rotate temp array clockwise by 1 without using pop/unshift
// var rotated = [];
// // Save last element
// var last = temp[temp.length - 1];
// // Shift everything right
// rotated.push(last);
// for (var i = 0; i < temp.length - 1; i++) {
//     rotated.push(temp[i]);
// }

// // Step 4: Place rotated values back into result
// var idx = 0;
// // top row
// for (var i = 0; i < m; i++) {
//     result[0][i] = rotated[idx++];
// }
// // right column
// for (var i = 1; i < n; i++) {
//     result[i][m - 1] = rotated[idx++];
// }
// // bottom row (right to left)
// for (var i = m - 2; i >= 0; i--) {
//     result[n - 1][i] = rotated[idx++];
// }
// // left column (bottom to top)
// for (var i = n - 2; i > 0; i--) {
//     result[i][0] = rotated[idx++];
// }

// // Final result
// console.log(result);
