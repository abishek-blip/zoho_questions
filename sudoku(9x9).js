var mat =  [ [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]]


        /*  [ [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]]  */

var found = false

for(var i = 0; i < mat.length; i++)
{
    for(var j = 0; j < mat.length; j++)
    {
        for(var k = j + 1; k < mat.length; k++)
        {
            if(mat[i][j] == mat[i][k])
            {
                found = true
                break
            }
        }
        if(found == true)
        {
            break
        }
    }
    if(found == true)
    {
        break
    }
}
for(var i = 0; i < mat.length; i++)
{
    for(var j = 0; j < mat.length; j++)
    {
        for(var k = i + 1; k < mat.length; k++)
        {
            if(mat[i][j] == mat[k][j])
            {
                found = true
                break
            }
        }
        if(found == true)
        {
            break
        }
    }
    if(found == true)
    {
        break
    }
}

function checksubmatrix(c_s, c_e, r_s, r_e)
{
    if(found == false)
    {
        var unic = []
        for( var i = c_s; i <= c_e; i++)
        {
            for(var j = r_s; j <= r_e; j++)
            {
                for(var r = 0; r < unic.length; r++)
                {
                    if(mat[i][j] == unic[r])
                    {
                        found = true
                        break
                    }
                    else
                    {
                        unic.push(mat[i][j])
                    }
                }
                if(found == true)
                {
                    break
                }
            }
            if(found == true)
            {
                break
            }
        }
    }
}

// checksubmatrix(0, 2, 0, 2)
// checksubmatrix(0, 2, 3, 5)
// checksubmatrix(0, 2, 6, 8)

// checksubmatrix(3, 5, 0, 2)
// checksubmatrix(3, 5, 3, 5)
// checksubmatrix(3, 5, 6, 8)

// checksubmatrix(6, 8, 0, 2)
// checksubmatrix(6, 8, 3, 5)
// checksubmatrix(6, 8, 6, 8)
for (var row = 0; row < 9; row += 3) 
{
    for (var col = 0; col < 9; col += 3) 
    {
        checksubmatrix(row, row + 2, col, col + 2);
    }
}

if(found == false)
{
    console.log("Valid");
}
else
{
    console.log("Not Valid");
}




// var mat = 
 
// //     [[5, 3, 4, 6, 7, 8, 9, 1, 2],
// //     [6, 7, 2, 1, 9, 5, 3, 4, 8],
// //     [1, 9, 8, 3, 4, 2, 5, 6, 7],
// //     [8, 5, 9, 7, 6, 1, 4, 2, 3],
// //     [4, 2, 6, 8, 5, 3, 7, 9, 1],
// //     [7, 1, 3, 9, 2, 4, 8, 5, 6],
// //     [9, 6, 1, 5, 3, 7, 2, 8, 4],
// //     [2, 8, 7, 4, 1, 9, 6, 3, 5],
// //     [3, 4, 5, 2, 8, 6, 1, 7, 9]];
//           [ [5, 3, 4, 6, 7, 8, 9, 1, 2],
//             [6, 7, 2, 1, 9, 5, 3, 4, 8],
//             [1, 9, 8, 3, 4, 2, 5, 6, 7],
//             [8, 5, 9, 7, 6, 1, 4, 2, 3],
//             [4, 2, 6, 8, 5, 3, 7, 9, 1],
//             [7, 1, 3, 9, 2, 4, 8, 5, 6],
//             [9, 6, 1, 5, 3, 7, 2, 8, 4],
//             [2, 8, 7, 4, 1, 9, 6, 3, 5],
//             [3, 4, 5, 2, 8, 6, 1, 7, 9]]

// var found = false;

// // Check rows
// for (var i = 0; i < mat.length; i++) {
//     for (var j = 0; j < mat.length; j++) {
//         for (var k = j + 1; k < mat.length; k++) {
//             if (mat[i][j] == mat[i][k]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (found) break;
//     }
//     if (found) break;
// }

// // Check columns
// for (var i = 0; i < mat.length; i++) {
//     for (var j = 0; j < mat.length; j++) {
//         for (var k = i + 1; k < mat.length; k++) {
//             if (mat[i][j] == mat[k][j]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (found) break;
//     }
//     if (found) break;
// }

// // Check 3x3 subgrids
// function checksubmatrix(c_s, c_e, r_s, r_e) {
//     if (found) return;
//     var unic = [];
//     for (var i = c_s; i <= c_e; i++) {
//         for (var j = r_s; j <= r_e; j++) {
//             if (unic.includes(mat[i][j])) {
//                 found = true;
//                 return;
//             }
//             unic.push(mat[i][j]);
//         }
//     }
// }

// // Dynamically check all 3x3 subgrids
// for (var row = 0; row < 9; row += 3) {
//     for (var col = 0; col < 9; col += 3) {
//         checksubmatrix(row, row + 2, col, col + 2);
//     }
// }

// if (found) {
//     console.log("Not Valid");
// } else {
//     console.log("Valid");
// }
