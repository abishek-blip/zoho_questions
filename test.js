var str = "WELCOMETOZOHOCORPORATON";
var search = "TOO";
var mat = [];

// Calculate n (smallest integer with n*n >= str.length)
var n = 0;
while (n * n < str.length) {
  n++;
}

// Fill the matrix manually
var temp = 0;
for (var i = 0; i < n; i++) {
  mat[i] = [];
  for (var j = 0; j < n; j++) {
    if (temp < str.length) {
      mat[i][j] = str[temp];
      temp++;
    } else {
      mat[i][j] = " ";
    }
  }
}

// Search function for horizontal and vertical directions
// function searchInMatrix() {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (mat[i][j] === search[0]) {
        // Check horizontally (left to right)
        var match = true;
        for (var k = 1; k < search.length; k++) {
          if (j + k >= n || mat[i][j + k] !== search[k]) {
            match = false;
            break;
          }
        }
        if (match) {
          console.log("start_index = (" + i + "," + j + ")");
          console.log("end_index = (" + i + "," + (j + search.length - 1) + ")");
        }

        // Check vertically (top to bottom)
        match = true;
        for (var k = 1; k < search.length; k++) {
          if (i + k >= n || mat[i + k][j] !== search[k]) {
            match = false;
            break;
          }
        }
        if (match) {
          console.log("start_index = (" + i + "," + j + ")");
          console.log("end_index = (" + (i + search.length - 1) + "," + j + ")");
        }
      }
    }
  }
// }

// searchInMatrix();
