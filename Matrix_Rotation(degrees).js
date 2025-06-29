var mat =  [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10,11,12],
            [13,14,15,16]];

var degree = 270; // Can be 90, 180, 270, or 360
var time = (degree / 90) % 4; // Number of 90-degree rotations
var n = mat.length;

for (var t = 0; t < time; t++) {
    rotate(mat);
}

// Print the rotated matrix
for (var i = 0; i < n; i++) {
    var row = "";
    for (var j = 0; j < n; j++) {
        row += mat[i][j] + " ";
    }
    console.log(row);
}

// Function to rotate mat[][] 90 degrees clockwise in-place
function rotate(mat) {
    var n = mat.length;

    // Step 1: Transpose matrix
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            var temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }

    // Step 2: Reverse each row
    for (var i = 0; i < n; i++) {
        var left = 0;
        var right = n - 1;
        while (left < right) {
            var temp = mat[i][left];
            mat[i][left] = mat[i][right];
            mat[i][right] = temp;
            left++;
            right--;
        }
    }
}
