var mat = [[1, 2, 3, 4, 5],
           [6, 7, 8, 9, 10],
           [11, 12, 13, 14, 15],
           [16, 17, 18, 19, 20],
           [21, 22, 23, 24, 25]]     
var result = ""

top = 0
bottom = mat.length - 1
left = 0
right = mat[0].length - 1

while(top <= bottom && left <= right)
{
    for(var i = top; i <= right; i++)
    {
        result += " " + mat[top][i]                          //console.log(mat[top][i]);
    }
    top++

    for(var j = top; j <= right; j++)
    {
        result += " " + mat[j][right]                        //console.log(mat[j][right]);
    }
    right--
    if (top <= bottom)
    {
        for(var k = right; k >= left; k--)
        {
            result += " " + mat[bottom][k]                       //console.log(mat[bottom][k]);
        }
        bottom--
    }
    if (left <= right)
    {
        for(var l = bottom; l > left; l--)
        {
            result += " " + mat[l][left]                         //console.log(mat[l][left]);
        }
        left++
    }
}

console.log(result);                                   // 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10